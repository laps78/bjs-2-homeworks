function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  result = JSON.stringify(arr1) === JSON.stringify(arr2);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

  return resultArr; // array
}
