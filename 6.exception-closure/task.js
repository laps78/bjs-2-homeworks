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
    const err = new Error("Треугольник с такими сторонами не существует");
    this.one = Number.parseFloat(one);
    this.two = Number.parseFloat(two);
    this.three = Number.parseFloat(three);

    if ((this.one + this.two) < this.three && (this.two + this.three) < this.one && (this.one + this.three) < this.two) throw err;
  }

  getPerimeter(one, two, three) {
    return one + two + three;
  }

  getArea(one, two, three) {
    let p = this.getPerimeter(one, two, three) / 2;
    let area = Math.sqrt(p * (p - one) * (p - two) * (p - three));
    return area.toFixed(3);
  }
}

function getTriangle(one, two, three) {
  try {
    return new Triangle(one, two, three);
  } catch (error) {
    //возвращайте объект с двумя методами getArea и getPerimeter, которые возвращают строку: "Ошибка! Треугольник не существует".
  }
}