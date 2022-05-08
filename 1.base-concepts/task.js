'use strict';

function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let discriminant = (b * b) - (4 * a * c);

  arr = [];

  if (discriminant < 0) {
  } else if (discriminant === 0) {
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

  //Parsing floats
  let percentFloat = parseFloat(percent);
  let contributionFloat = parseFloat(contribution);
  let amountFloat = parseFloat(amount);
  
  //verifying floats
  if (typeof(percentFloat) !== float) {
    errString = `“Параметр <процентная ставка> содержит неправильное значени е <${percent}>”`;
    return errString;
  };

  if (typeof(contributionFloat) !== float) {
    errString = `“Параметр <первоначальный взнос> содержит неправильное значение <${contribution}>”`;
    return errString;
  }

  if (typeof (amountFloat) !== float) {
    errString = `“Параметр <сумма кредита> содержит неправильное значение <${amount}>”`;
    return errString;
  }
  
  //calculating credit summary
  let creditSum = amountFloat - contributionFloat;
  
  //calculating date range
  let monthCount;//todo

  //calculating monthly payment
  let monthlyPayment;//todo

  //calculating total amount
  totalAmount = monthCount * monthlyPayment; 
  totalAmount = totalAmount.toFixed(2);
  
  console.log(totalAmount);
  
  return totalAmount;
}
