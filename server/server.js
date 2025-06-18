import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: 'http://localhost:5174',
        methods: ['GET', 'POST']
    }
});

app.use(cors({ origin: 'http://localhost:5174' }));
app.use(express.json());

let voteCounts = {};

io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('vote', (option) => {
        voteCounts[option] = (voteCounts[option] || 0) + 1;
        io.emit('updateVotes', voteCounts);
    });

    socket.on('resetVotes', () => {
        voteCounts = {}; // ✅ fixed typo
        io.emit('updateVotes', voteCounts);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

httpServer.listen(5000, () => {
    console.log("🚀 Server running at http://localhost:5000");
});
