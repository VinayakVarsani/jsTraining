class Employee {
  static organizationName = "ABC";
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
    experience
  ) {
    this.#employeeID = employeeID;
    this.#department = department;
    this.#designation = designation;
    this.#technologiesKnown = technologiesKnown;
    this.#dateOfJoining = dateOfJoining;
    this.#experience = experience;
  }
  set setValue(newObj) {
    this.#department = newObj["department"];
    this.#technologiesKnown = newObj["technologiesKnown"];
    this.#designation = newObj["designation"];
  }

  get getValue() {
    return `The department is ${
      this.#department
    } and employees are assigned to ${this.#technologiesKnown} at the  ${
      this.#designation
    } post.`;
  }
}

let emp = new Employee(
  "PQR",
  "HR",
  "Manager",
  "AppDevelopment",
  "10/11/2021",
  5
);
emp.setValue = {
  department: "DevOps",
  technologiesKnown: "GCP",
  designation: "DevOps Engineer",
};
console.log(emp.getValue);
