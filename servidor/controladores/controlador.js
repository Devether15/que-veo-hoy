var con = require('../lib/conexionbd');

function obtenerTodas ( req, res ) {
    // var pelis = req.query.pelis;    
    var sql = "select * from pelicula"
    var gen = "select * from genero where " +anio+ "= genero.id=genero_id.id";
    var anio = "select * from anio"
    con.query( sql, function(error, resultado, fields){
        if(error) {
        console.log("Hubo un error", error.message);
        return res.status(404).send("Hubo un error en la consulta");   
    } 
    var response = {
        'peliculas':resultado
    };

    res.send(JSON.stringify(response));

    });
}

function obtenerGeneros ( req, res ){
    var sql = "select * from genero"
    var generos = req.query.generos
    con.query( sql, function( error, resultado, fields){
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