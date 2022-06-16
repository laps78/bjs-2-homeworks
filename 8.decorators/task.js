function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let index = cache.findIndex((item) => item.hash === hash);

    if (index !== -1) {
      console.log(`Из кэша: ${cache[index].result}`);
      return `Из кэша: ${cache[index].result}`;
    } else {
      let result = func(...args);
      if (cache.length >= 5) {
        cache.shift();
      };
      cache.push({hash, result});//???
      console.log(`Вычисляем: ${result}`);
      return `Вычисляем: ${result}`;
    }
  }
  return wrapper;
}


function debounceDecoratorNew(func) {
  // Ваш код
  func(args);
  let isCalled = true;
  let timeout;

  return function () {
    if (isCalled) {
      return;
    }

    //
    console.log(`args: ${args}`);
    console.log(`args[1]: ${args[1]}`);
    //

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      console.log(`func apply`);
    }, args[1]);
  };

}

function debounceDecorator2(func) {
  // Ваш код
    
    //еще не приступал...
}
