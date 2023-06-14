exports.solicitarPedido = async (req, res) => {
    console.log("Solicitud de pedido recibida");
    res.status(200).send({message:"Solicitud de pedido recibida"});
}

exports.verificarPedido = async (req, res) => {
    console.log("Solicitud de pedido recibida");
    res.status(200).send({message:"Verificando repartidor"});
}

exports.verificarRepartidor = async (req, res) => {
    console.log("Solicitud de pedido recibida");
    res.status(200).send({message:"Verificando repartidor"});
}
