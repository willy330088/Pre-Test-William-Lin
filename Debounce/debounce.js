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

*/
