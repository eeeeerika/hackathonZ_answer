'use strict';

// メモを画面上に表示する
function memo() {
    const userName = $('#userName').val();
    const message = $('#message').val();
    $('#thread').prepend('<p>' + userName + 'さんのメモ：' + message + '</p>');
    $('#message').val('');
    return false;
}
