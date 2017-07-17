/**
 * Created by benjaminl on 7/17/2017.
 */

var handle = function (io) {
    io.on('connection', function (socket) {
        socket.emit('pull',{"name" : "connected", "id" : socket.id});
        socket.on('push', function (data) {
            socket.broadcast.emit('pull',data);
        });
    });
};

exports.handle = handle;