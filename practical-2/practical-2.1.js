class Person {
  constructor(name1, email1, contactNum1) {
    this.fullName = name1;
    this.email = email1;
    this.contactNum = contactNum1;
  }

  display() {
    console.log(
      `I am ` +
        this.fullName +
        ` and my email is ` +
        this.email +
        ` and my contact number is ` +
        this.contactNum
    );
  }
}

person = new Person("Vinayak Varsani", "abc@gmail.com", 1234567890);

class Trainee extends Person {
  constructor(name1, highestQualification, college, university, passoutYear) {
    super(name1);
    this.highestQualification = highestQualification;
    this.college = college;
    this.university = university;
    this.passoutYear = passoutYear;
  }
  display() {
    console.log(
      `I am ` +
        this.name1 +
        `My highest qualification is ` +
        this.highestQualification +
        ` and my college is ` +
        this.college +
        ` and my university is ` +
        this.university +
        ` and my passout year is ` +
        this.passoutYear
    );
  }
}
let trainee = new Trainee("A", "BE", "XYZ", "GTU", 2022);
trainee.dispaly();
