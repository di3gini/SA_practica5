const controller = require("../controllers/cliente.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", 
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    

    
    app.post("/cliente/solicitarPedido", controller.solicitarPedido);

    app.get("/cliente/verificarPedido", controller.verificarPedido);

    app.get("/cliente/verificarRepartidor", controller.verificarRepartidor);

}