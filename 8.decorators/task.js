function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let index = cache.find((item) => item.hash === hash);

    if (index) {
      console.log(`Из кэша: ${index.result}`);
      return `Из кэша: ${index.result}`;
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

  return function (...args) {
    func(args);
    let isCalled = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!isCalled) {
        func.apply(this, args);
        isCalled = false;
      }
    }, delay);
  };

}

function debounceDecorator2(func) {
  // Ваш код
  let timeout;

  return function (...args) {
    if (!this.count) {
      this.count = 0;
    }

    func(args);

    this.count++
    let isCalled = true;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!isCalled) {
        func.apply(this, args);
        isCalled = false;
      }
    }, delay);
  };

}