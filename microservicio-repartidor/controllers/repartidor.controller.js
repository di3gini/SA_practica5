exports.recibirPedido = async (req, res) => {
    console.log("Pedido recibido");
    res.status(200).send({message:"Pedido recibido"});
}

exports.informarEstadoPedido = async (req, res) => {
    console.log("Informando estado del pedido");
    res.status(200).send({message:"Informando estado del pedido"});
}

exports.entregarPedido = async (req, res) => {
    console.log("Pedido entregado");
    res.status(200).send({message:"Pedido entregado"});
}
