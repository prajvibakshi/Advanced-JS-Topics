var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "designer"
};

var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

var mary = new Person('mary', 1985, 'painter');
