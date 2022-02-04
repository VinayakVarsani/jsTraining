let arrOfObj = [
  {
    enr_no: 1,
    f_name: "A",
    gender: "Male",
  },
  {
    enr_no: 2,
    f_name: "B",
    gender: "Female",
  },
  {
    enr_no: 3,
    f_name: "C",
    gender: "Male",
  },
  {
    enr_no: 4,
    f_name: "X",
    gender: "Male",
  },
];

let newObj = {
  enr_no: 5,
  f_name: "AB",
  gender: "female",
};
const verifyObj = (newObj, arrOfObj) => {
  const output = arrOfObj.find(
    (i) =>
      i.enr_no === newObj.enr_no &&
      i.f_name === newObj.f_name &&
      i.gender === newObj.gender
  );

  if (output === undefined) {
    return false;
  } else {
    return true;
  }
};
console.log(verifyObj(newObj, arrOfObj));
