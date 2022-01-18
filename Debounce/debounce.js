const debounce = (func, delay) => {
  let timer = null;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const handleClick = () => {
  console.log('Clicked');
};

const debounceFunc = debounce(handleClick, 5000);

document.getElementById('button').addEventListener('click', debounceFunc);

/*
原理：
debounce 函式的目的為透過設定特定時限，來避免使用者重複觸發指定事件

實作：
當 id 為 'button' 的按鈕被點擊時，會去呼叫 debounce(handleClick, 5000) 所回傳匿名箭頭函式，進而清除前一次所設定的計時器，並重新設定一個。這時，名為 timer 的計時器會進入 WebAPI 進行倒數。若倒數完畢且未被清除，則會進入到 callback queue 等待執行，待 callback stack 其他內容執行完畢後進入並執行，進而執行 handleClick 函式，印出 'Clicked'。
若 5000 毫秒內反覆點擊，則會一再觸發清除計時器，並重新計時，藉此避免一再印出 'Clicked'。
*/
