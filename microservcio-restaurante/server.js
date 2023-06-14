const express = require("express");
const bodyParser = require("body-parser")
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const defaultRouter = require("./routes/default");


const app = express();

app.use(express.json());
app.use(express.static("client"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);


app.use("/", defaultRouter)
require('./routes/restaurante.routes')(app)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))



app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
