function parseCount(value) {
  let result = Number.parseInt(value, 10);
  if (Number.isNaN(result)) {
    throw new Error('Невалидное значение');
  }
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
    this.one = Number.parseFloat(one);
    this.two = Number.parseFloat(two);
    this.three = Number.parseFloat(three);

    if ((one + two) < three || (two + three) < one || (one + three) < two) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  getPerimeter() {
    return this.one + this.two + this.three;
  }

  getArea() {
    let p = this.getPerimeter(this.one, this.two, this.three) / 2;
    let area = Math.sqrt(p * (p - this.one) * (p - this.two) * (p - this.three));
    return Number(area.toFixed(3));
  }
}

function getTriangle(one, two, three) {
  try {
    return new Triangle(one, two, three);
  } catch (error) {
    let obj = {
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
      getArea() {
        return "Ошибка! Треугольник не существует";
      }
    }
    return obj;
  }
}