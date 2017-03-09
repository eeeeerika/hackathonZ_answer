'use strict';

// 入室メッセージをサーバに送信する
const userName = $('#userName').val();
socket.emit('enter', userName + 'さんが入室しました。');

// サーバから受信した入室メッセージを画面上に表示する
socket.on('enter', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
