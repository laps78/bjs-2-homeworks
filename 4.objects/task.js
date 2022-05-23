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

Student.prototype.addMarks(...marks) {
  for (let mark in marks) {
    this.marks.push(mark);
  }
}