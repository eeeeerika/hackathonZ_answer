'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('publish', function (data) {
        io.sockets.emit('publish', data);
    });
};
