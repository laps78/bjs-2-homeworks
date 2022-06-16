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
  
}

function debounceDecorator2(func) {
  // Ваш код
}
