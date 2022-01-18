const fibonnacci = (position) => {
  if (Number.isInteger(position) && position >= 0) {
    let num1 = 0;
    let num2 = 1;
    let nextNum;

    for (let i = 1; i < position; i++) {
      nextNum = num1 + num2;
      num1 = num2;
      num2 = nextNum;
    }

    return position === 0 ? num1 : num2;
  } else {
    console.log('Please enter an appropriate number');
    return null;
  }
};
