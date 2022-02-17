//array containg data of name strings
const arrayCheck = [
  "John  Abc",
  "Paul",
  "George",
  "Ringo",
  "Aman D'Souza",
  "Raman D''Souza",
];

//check if exist
const newName = (arrayCheck, newNm) => {
  const Nm = "/" + newNm + "/i";
  const verifyStr = arrayCheck.includes(Nm);

  //check the format of the string name
  if (verifyStr === false) {
    const formula = new RegExp(`^([A-Za-z]+)+[A-Za-z]+([']?)[A-Za-z]+$`, "g");
    let res = formula.test(newNm);
    if (res === true) {
      arrayCheck.push(newNm);
    } else {
      console.log("Not a valid name"); //validation failed
    }
  } else {
    console.log("Name Already exist"); //Alreqady exist cannot add
  }
  return arrayCheck;
};

console.log(newName(arrayCheck, "Suzi   D''Souza")); //add new name
