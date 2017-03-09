'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    const userName = $('#userName').val();
    const message = $('#message').val();
    socket.emit('publish', userName + 'さん：' + message);
    $('#message').val('');
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('publish', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
