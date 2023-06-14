const controller = require("../controllers/repartidor.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", 
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    

    
    app.get("/repardior/recibirPedido", controller.recibirPedido);

    app.post("/repardior/informarEstadoPedido", controller.informarEstadoPedido);
    
    app.post("/repardior/entregarPedido", controller.entregarPedido);
}