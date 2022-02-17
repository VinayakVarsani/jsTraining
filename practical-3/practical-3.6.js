const employee = {
  employeeID: 1,
  fullName: "Lav Panchal",
  emailID: "lav.panchal@bacancy.com",
  department: "NodeJS",
  desgination: "Trainee Engineer",
};
console.log(employee);
cloneEmployee = Object.assign({}, employee);

{
  cloneEmployee.employeeID = "4";
  cloneEmployee.fullName = "Krushit dudhat";
  cloneEmployee.emailID = "pqr@gmail.com";
  cloneEmployee.department = "Angular";
  cloneEmployee.desgination = "Software Engineer";

  console.log(cloneEmployee);
}
