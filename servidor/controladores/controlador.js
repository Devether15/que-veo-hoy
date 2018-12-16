const con = require('../lib/conexionbd');

function obtenerTodas ( req, res ) {
    
    let sql = `SELECT * FROM pelicula INNER JOIN genero ON pelicula.genero_id = genero.id `;

    let limite = ' LIMIT ' + (req.query.pagina - 1) * 20 + ',' + req.query.cantidad;

    let contador = 'SELECT COUNT(*) AS total FROM pelicula';
                       
    
    if( req.query.titulo ) { 
    sql += `AND titulo LIKE "%${req.query.titulo}%" ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;
    } if( req.query.genero ) {
        sql += `AND genero.id = ${req.query.genero} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;
    } if( req.query.anio ) {
        sql += `AND anio = ${req.query.anio} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;
    } if ( req.query.orden ) {
        sql += `AND orden = ${req.query.orden} ORDER BY ${req.query.columna_orden} ${req.query.tipo_orden}`;
    }

    con.query( sql + limite, function(error, resultado, fields) {
        if (error) {
        console.log("Hubo un error", error.message);
        return res.status(404).send("Hubo un error en la consulta");   
    };
    
    con.query(contador, function (error, resultadoTotal, fields){
        if(error){
            console.log("Hubo un error", error.message);
            return res.status(404).send("Hubo un error en la consulta");
        };
    
        let response = {
        'peliculas':resultado,
        'resultadoTotal':resultadoTotal[0].resultadoTotal,

    };

    res.send(JSON.stringify(response));

    });
});

}

function obtenerGeneros ( req, res ){
    var traerGeneros = "select * from genero"
    var generos = req.query.generos
    con.query( traerGeneros, function( error, resultado, fields){
        if(error) {
            console.log("Hubo un error", error.message);
            return res.status(404).send("Error en la consuta");
        }
        var response = {
            'generos':resultado
        };

        res.send(JSON.stringify(response));
    });

}

module.exports = {
    obtenerTodas: obtenerTodas,
    obtenerGeneros:obtenerGeneros
};


//Esta es la ruta que pide el front-end
//peliculas?pagina=1&genero=2&cantidad=52&columna_orden=titulo&tipo_orden=ASC

