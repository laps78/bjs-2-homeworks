function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let elem = cache.find((item) => item.hash === hash);

    if (elem) {
      console.log(`Из кэша: ${elem.result}`);
      return `Из кэша: ${elem.result}`;
    };
    let result = func(...args);
    if (cache.length >= 5) {
      cache.shift();
    };
    cache.push({ hash, result });
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  }
  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  // Ваш код
  let timeout;
  let isCalled;

  return function (...args) {
    if (isCalled === false || isCalled === undefined) {
      func(...args);
      isCalled = true;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      isCalled = false;
    }, delay);
  };
}

function debounceDecorator2(func, delay) {
  // Ваш код
  let timeout;
  let isCalled;
  
  return function (...args) {
    if (isCalled === false  || isCalled === undefined) {
      func(...args);
      isCalled = true;
    }
    
    //Counting calbacks...
    if (!this.count) {
      this.count = 0;
    }
    this.count++
    
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      func.apply(this, args);
      isCalled = false;
    }, delay);
  };
}