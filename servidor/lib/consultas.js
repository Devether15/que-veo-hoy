var conexion = require('./conexionbd');


//implementación aportada por Angel Verdú
const peliculas = function( columnaOrden, tipoOrden ) {
    return "SELECT id, titulo, duracion, director, anio, " + 
           "fecha_lanzamiento, puntuacion, poster, trama  " + 
           "FROM pelicula " +
           "WHERE   ( ? IS NULL OR genero_id = ? ) AND " +
           "        ( ? IS NULL OR titulo LIKE ? ) AND " +
           "        ( ? IS NULL OR anio = ? ) " + 
           "ORDER BY  " + columnaOrden + " " + tipoOrden + " " +
           "LIMIT ?, ? ";
  };



function obtenerPeliculasConFiltro (req,res){
    let sql = consultas.peliculas(req.query.columna_orden, req.query.tipo_orden);
    let valoresFiltros = obtenerValoresFiltorsPeliculas (req.query);
    let cantidad = parseint (req.query.cantidad);
    let pagina = parseInt (req.query.pagina)
    let inicio = (pagina - 1) * cantidad;
    let parametros = [...valoresFiltros, inicio,cantidad];

    con.connection.query(sql,parametro, function(error, resultados){
        if (mensajeError(error, res)) 
        return;
        let respuesta = {}
        respuesta.peliculas = resultados;
        sql = consultas.totalpeliculas;

        con.connection.query(sql,parametro, function(error, resultados){
            if (mensajeError(error, res)) 
            return;

            respuesta.total=resultados[0].total;
            res.send(respuesta);


    })




});

}

