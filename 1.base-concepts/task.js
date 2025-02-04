'use strict';

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let discriminant = (b * b) - (4 * a * c);

  arr = [];

 if (discriminant === 0) {
    //has one solution
    let result = -b / (2 * a);
    arr.push(result);
  } else if (discriminant > 0) {
    //has two solutions
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь
  let errString = '';
  let currentDate = new Date();

  //verifying input data
  if (typeof(percent) !== 'number') {
    errString = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return errString;
  };
  
  if (typeof(contribution) !== 'number') {
    errString = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return errString;
  }
  
  if (typeof(amount) !== "number") {
    errString = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return errString;
  }

  //Parsing floats
  let percentFloat = parseFloat(percent / 100);
  let contributionFloat = parseFloat(contribution);
  let amountFloat = parseFloat(amount);
  
  //calculating date range
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let creditYears = date.getFullYear() - currentYear;
  let monthCount = creditYears * 12 - currentMonth + date.getMonth();

  //calculating credit summary
  let creditSum = amountFloat - contributionFloat;

  //Calculating percent per month
  let monthlyPercent = percentFloat / 12;
  
  //calculating monthly payment
  let monthlyPayment = creditSum * (monthlyPercent + (monthlyPercent /(Math.pow((1 + monthlyPercent), monthCount) - 1)));
  
  //calculating total amount
  totalAmount = (monthCount * monthlyPayment); 
  totalAmount = Number(totalAmount.toFixed(2));
  
  console.log(totalAmount);
  
  return totalAmount;
}
