const express = require("express");


const defaultRoute = express.Router();

defaultRoute.get("/", (req, res)=>{
    const response ={
        message: "Microservicio de restaurante",
        author: "Diego Molina",
        subject: "Software Avanzado - Laboratorio"
    }
    res.json(response)
})

module.exports = defaultRoute;