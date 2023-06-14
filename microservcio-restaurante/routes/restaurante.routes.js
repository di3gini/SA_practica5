const controller = require("../controllers/restaurante.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers", 
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    

    
    app.post("/restaurante/solicitarPedido", controller.solicitarPedido);

    app.get("/restaurante/verificarPedido", controller.verificarPedido);

    app.get("/restaurante/verificarRepartidor", controller.verificarRepartidor);

}