import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.json());

let voteCounts = {};

io.on('connection', (socket) => {
    console.log('User connected : '+ socket.id);

    socket.on('vote', (option) => {
        voteCounts[option] = (voteCounts[option] || 0) + 1 ;
        io.emit('updateVotes', voteCounts);
    });

    socket.on('resetVotes', () => {
        votecounts = {};
        io.emit('updateVotes', voteCounts);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected : ', + socket.id );
    });
});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});