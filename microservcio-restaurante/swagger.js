const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/default.js', './routes/restaurante.routes.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./server.js')
})