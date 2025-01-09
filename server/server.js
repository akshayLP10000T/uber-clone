import http from 'http';
import app from './index.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const server = http.createServer(app);

server.listen(PORT, async ()=>{
    console.log(`Sever running at ${PORT}`);
})