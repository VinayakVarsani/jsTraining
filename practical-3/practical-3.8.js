const patients = [
  {
    name: "James",
    ailments: ["Cough", "Cold", "Fever"],
  },
  {
    name: "George",
    ailments: ["Blood Pressure"],
  },
  {
    name: "Robert",
    ailments: ["Cough", "Cold", "Fever"],
  },
  {
    name: "Mary",
    ailments: ["Diabetes"],
  },
  {
    name: "Patricia",
    ailments: ["Blood Pressure"],
  },
];

const mainFun = (arr) => {
  const appendNew = [
    {
      name: "Christopher",
      ailments: ["Dengue"],
    },
    {
      name: "Thomas",
      ailments: ["Diabetes"],
    },
    {
      name: "Anthony",
      ailments: ["Fatigue", "Cold", "Fever"],
    },
  ];

  const op1 = arr.concat(appendNew);
  console.log(op1);
  console.log("Done with concating");

  const changeName = "George";
  const updtPatient = op1.filter((item) => item.name !== changeName);
  console.log(updtPatient);
  console.log("Done with filtering");

  //new object named samuel
  const newObj = {
    name: "Samuel",
    ailments: ["Dengue", "Diabetes"],
  };
  let updArr = [newObj, ...updtPatient]; // spread operator
  console.log(updArr);
  console.log(
    "Done with setting new obj at first position using spread operator"
  );

  //changing the properties related to the Christopher
  objIndex = updArr.findIndex((obj) => obj.name === "Christopher");
  updArr[objIndex].ailments = ["Dengue", "Covid"];
  console.log(updArr);
  console.log("Done with updating data of Christopher using findIndex");

  //deleting the last data from the array

  updArr.pop();
  console.log(updArr);
  console.log("Done with deleting last data from the array using pop");

  //delete the first data from the array

  updArr.shift();
  console.log(updArr);
  console.log("Done with deleting first data from the array using shift");

  //update using index of array
  const updbyInd = {
    name: "samuel",
    ailments: ["Diabetes", "Dengue"],
  };
  updArr.splice(4, 0, updbyInd);
  console.log(updArr);
  console.log("Done with setting new obj through index of array using splice");

  //Finding patients of diabetes

  const diabetesArray = updArr.find(
    (element) => (element.ailments = "Diabetes")
  );
  console.log(diabetesArray);
  console.log("Done with finding patients of diabetes using find method");
  console.log(updArr.reverse());
};

console.log(mainFun(patients));
