function parseCount(value) {
  let result = Number.parseInt(value, 10);
  const err = new Error('Невалидное значение');
  if (Number.isNaN(result)) throw err;
  return result;
}

function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}
class Triangle {
  constructor(one, two, three) {
    if (one + two < three) throw "Треугольник с такими сторонами не существует";
  }

  getPerimeter(one, two, three) {
    return one + two + three;
  }

  getArea(one, two, three) {
    let p = getPerimeter(one, two, three) / 2;
    let area = Math.sqrt(p * (p - one) * (p - two) * (p - three));
    return area;
  }
}

function getTriangle(one,two,three) {
  try {
    return new Triangle;
  } catch (error) {
    //возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
  }
}