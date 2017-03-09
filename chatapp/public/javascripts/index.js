'use strict';

// チャットルームに入室する
function enter() {
    const userName = $('#userName').val();
    // ユーザ名をチェックする
    if ('' === userName) {
        alert('ユーザ名を入力してください。');
        return false;
    }
    $('form').submit();
}
