'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    const userName = $('#userName').val();
    socket.emit('exit', userName + 'さんが退室しました。');
    // 退室
    location.href = '/';
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('exit', function (data) {
    $('#thread').prepend('<p>' + data + '</p>');
});
