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

const match = (newObj, arrOfObj) => {
  const result = arrOfObj.find(
    (n) =>
      n.enr_no === newObj.enr_no &&
      n.f_name === newObj.f_name &&
      n.gender === newObj.gender
  );
  if (result === undefined) {
    arrOfObj.push(newObj);
  } else {
    return "This data already exist";
  }
  return arrOfObj;
};

console.log(match(newObj, arrOfObj));
