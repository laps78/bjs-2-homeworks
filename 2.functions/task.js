// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  max = -Infinity;
  
  // for ...
  for (let i = 0; i < arrOfArr.length; ++i) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }  
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let arrParams = getArrayParams(arr);
  return Math.abs(arrParams.max - arrParams.min);
}
