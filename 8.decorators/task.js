function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join(',');    
    
        //
    console.log(`hash: ${hash}`);
    console.log(`cache: ${cache}`);
        //
    
    let index = cache.findIndex((item) => item === hash);
    if (index !== -1) {
      console.log(`Из кэша: ${cache[index]}`);
    } else {
      let result = func(...args);
      if (cache.length >= 5) {
        cache.shift();
      }
      cache.push(hash);
      
          //
      console.log(`cache: ${cache}`);
          //

      console.log(`Вычисляем: ${result}`);
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
