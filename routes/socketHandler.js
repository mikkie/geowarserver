/**
 * Created by benjaminl on 7/17/2017.
 */

var handle = function (io) {
    io.on('connection', function (socket) {
        socket.emit('pull',{"name" : "connection", "id" : socket.id, "type" : "connected"});
        socket.on('push', function (data) {
            socket.broadcast.emit('pull',data);
        });
        socket.on('disconnect', function () {
            io.emit('pull',{"name" : "connection", "id" : socket.id, "type" : "disconnected"});
        });
    });
};

exports.handle = handle;