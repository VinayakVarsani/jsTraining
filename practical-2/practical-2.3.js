class Person {
  _fullName;
  _email;
  _contactNumber;

  constructor(name, email, contactNumber) {
    this._fullName = name;
    this._email = email;
    this._contactNumber = contactNumber;
  }
  display() {
    console.log(this._fullName);
    console.log(this._email);
    console.log(this._contactNumber);
  }
}

class Employee extends Person {
  static organizationName;
  #employeeID;
  #department;
  #designation;
  #technologiesKnown;
  #dateOfJoining;
  #experience;

  constructor(
    employeeID,
    department,
    designation,
    technologiesKnown,
    dateOfJoining,
    experience,
    contactNumber,
    email,
    fullName
  ) {
    super(contactNumber, email, fullName);
    this.#employeeID = employeeID;
    this.#department = department;
    this.#designation = designation;
    this.#technologiesKnown = technologiesKnown;
    this.#dateOfJoining = dateOfJoining;
    this.#experience = experience;
  }

  //   get dateOfJoining() {
  //     return this.#dateOfJoining;
  //   }

  static sortEmp(arrEmp) {
    return arrEmp.sort((a, b) => a.#dateOfJoining - b.#dateOfJoining);
  }

  display() {
    console.log(
      `ID :${this.#employeeID}
      Department: ${this.#department} 
      Date Of Joining: ${this.#dateOfJoining}  
      Designation:${this.#designation} 
      Technologies: ${this.#technologiesKnown} 
      Experience: ${this.#experience} years of experience.`
    );
  }
}

// main

Employee.organizationName = "ABC";

let arrEmp = [
  new Employee(
    1,
    "Engineering",
    "Manager",
    "AppDevelopment",
    new Date("2020-4-20"),
    4
  ),
  new Employee(2, "HR", "Manager", "AppDevelopment", new Date("2020-3-20"), 5),
  new Employee(3, "QA", "Manager", "AppDevelopment", new Date("2020-6-20"), 5),
  new Employee(4, "BA", "Manager", "AppDevelopment", new Date("2020-7-20"), 5),
  new Employee(
    "5",
    "Business Analyst",
    "Manager",
    "AppDevelopment",
    new Date("2020-10-20"),
    2
  ),
];

arrEmp = Employee.sortEmp(arrEmp);
arrEmp.forEach((element) => {
  element.display();
});
