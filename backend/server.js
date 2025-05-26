import cors from 'cors';
import express from 'express';  
import  notesRoutes  from './routes/notesRoutes.js'
import dotenv from 'dotenv';


import { connectMongoose } from './db/connect_db.js';
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/api/notes/',notesRoutes);
app.listen(5001, () => {
    console.log(`listening on port ${port}`);
    connectMongoose();

    
});

 
