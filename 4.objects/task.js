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
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...marks){
  
  if (this.marks === undefined) {
      this.marks = [...marks];
    } else {
      this.marks.push(...marks);
    }
  
}

Student.prototype.getAverage = function () {
  if (!this.marks) {
    console.log(`there is no marks (is undefined)!`);
  }
  return this.marks.reduce((sum, current) => sum + current) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}