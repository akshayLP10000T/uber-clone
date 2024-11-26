import http from 'http';
import app from './index.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

app.use(cors());
const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Sever running at ${PORT}`);
})