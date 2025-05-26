import cors from 'cors';
import express from 'express';  
import  notesRoutes  from './routes/notesRoutes.js'
import dotenv from 'dotenv';
import path from 'path';


import { connectMongoose } from './db/connect_db.js';
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

const __dirname = path.resolve();

if(process.env.NODE_ENV !== 'production') {
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
}

app.use('/api/notes/',notesRoutes);

app.use(express.static(path.join(__dirname,"../frontend/dist")));


if(process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
});
}
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    connectMongoose();
});