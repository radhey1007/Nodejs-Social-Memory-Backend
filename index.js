import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(bodyParser.json({limit:"30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

app.get('/', (req, res)=> {
    res.send('Welcome to API portal.:)')
})

// const CONNECTION_URL = 'mongodb+srv://radhey:radhey123@cluster0.7r9ky.mongodb.net/<Social-Memories>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser:true, useUnifiedTopology:true})  
    .then(()=> {
        app.listen(PORT, ()=> console.log(`server running on port: ${PORT}` ))
    })
    .catch((error)=> {
        console.log(error.message);
    });

mongoose.set('useFindAndModify', false);
