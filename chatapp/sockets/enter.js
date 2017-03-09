'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enter', function (data) {
        socket.broadcast.emit('enter', data);
    });
};
