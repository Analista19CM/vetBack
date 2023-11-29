import express, { urlencoded } from "express";
import config from './config.js';
import routes from './routes/routes.js';
import bodyParser from 'body-parser';
// var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
 
const app = express()
app.use(express.json())
app.set('port',config.port)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(routes)
export default app;