const throttle = (func, timeout) => {
  let currentTime = Date.now();
  return () => {
    if (currentTime + timeout - Date.now() < 0) {
      func();
      currentTime = Date.now();
    }
  };
};
