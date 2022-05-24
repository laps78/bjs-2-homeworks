function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark,];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks){
  for (let mark in marks) {
    if (this.marks === undefined) {
      this.marks = [marks[mark],];
    } else {
      this.marks.push(marks[mark]);
    }
  }
}

Student.prototype.getAverage = function () {
  let sum = 0;
  if (this.marks) {
    for (let mark in this.marks) {
      sum += this.marks[mark];
    };
    return sum / this.marks.length;
  } else { 
    console.log(`there is no marks (is undefined)!`);
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}