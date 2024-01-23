const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

const users = {};

io.on('connection', socket => {
    // .on is an event listener that gets triggered when new-user-joined is emitted
    socket.on('new-user-joined', name => {
        // socket.id automatically assigns a unique id
        users[socket.id] = name;
        // .emit triggers the user-joined event
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    // disconnect triggers automatically when a user ping doesnt revert to server. In this event socket.id becomes automatically available to the listener method
    socket.on('disconnect', message => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id]
    });
});

const PORT = 8000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
