import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/routes';

//connects to the database
mongoose.connect('mongodb://')


const app = express();

//points to the client directory so views can be loaded;
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));

app.use('/', router);

module.exports = app;