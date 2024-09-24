// JavaScript
//console.log('Hello world!');

//console.log(document.getElementById('myColor').value);
//document.getElementById('ID名')

//document.getElementById('bodyText').textContent = document.getElementById('myColor').value;

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

text.textContent = color.value;

//カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);

function changeColor() {
    // カラーコードを表示
    //text.textContent = color.value;

    //カラーコードを表示
    if (color.value === '#ffffff') {
        text.textContent = 'コード：' + color.value + '(white)';
    } else if (color.value === '#000000') {
        text.textContent = 'コード：' + color.value + '(black)';
    } else {
        text.textContent = 'コード：' + color.value;
    }



    // カラーピッカーで色が選択されたらchangeColorを動作させる
    color.addEventListener('input', changeColor);

    // 背景色を変更
    document.body.style.backgroundColor = color.value;
}
