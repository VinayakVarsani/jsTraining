class Person {
  _fullName;
  _email;
  _contactNum;

  constructor(fn, em, cn) {
    this._fullName = fn;
    this._email = em;
    this._contactNum = cn;
  }
  display() {
    console.log(this._fullName);
    console.log(this._email);
    console.log(this._contactNum);
  }
}

class Employee extends Person {
  static organizationName;
  #employeeID;
  #dipartment;
  #designation;
  #technologiesKnown;
  #dateOfJoining;
  #experience;

  constructor(emp, dip, des, tec, doj, exp, fn, em, cn) {
    super(fn, em, cn);
    this.#employeeID = emp;
    this.#dipartment = dip;
    this.#designation = des;
    this.#technologiesKnown = tec;
    this.#dateOfJoining = doj;
    this.#experience = exp;
  }

  get doj() {
    return this.#dateOfJoining;
  }

  display() {
    super.display();
    console.log(this.#employeeID);
    console.log(this.#dipartment);
    console.log(this.#designation);
    console.log(this.#technologiesKnown);
    console.log(this.#dateOfJoining);
    console.log(this.#experience);
  }

  static sortEmployess(arr) {
    arr.sort(function (a, b) {
      return new Date(a.doj).getTime() - new Date(b.doj).getTime();
    });
  }
}
let e1 = new Employee(
  1,
  "Flutter",
  "Trainee",
  "java",
  new Date("2022 01 05"),
  "1 month",
  "Bhargav",
  "bhg@gmail",
  "123456"
);
let e2 = new Employee(
  2,
  "Python",
  "Trainee2",
  "python",
  new Date("2022 01 04"),
  "3 year",
  "Kishan",
  "kd@gmail",
  "123456"
);
let e3 = new Employee(
  3,
  "java",
  "Trainee3",
  "python",
  new Date("2022 01 05"),
  "4 month",
  "Mayank",
  "mayank@gmail",
  "123456"
);
let e4 = new Employee(
  4,
  "JS",
  "Trainee4",
  "Flutter",
  new Date("2022 01 06"),
  "1 month",
  "Yashvi",
  "yashvi@gmail",
  "123456"
);
let e5 = new Employee(
  5,
  "NODE",
  "Trainee5",
  "Flutter",
  new Date("2022 01 07"),
  "4 year",
  "Dhruvik",
  "dhruvik@gmail",
  "123456"
);
// console.log(e1.display());
const arr = [e1, e2, e3, e4, e5];

Employee.sortEmployess(arr);
for (const i of arr) {
  i.display();
  console.log("\n");
}
