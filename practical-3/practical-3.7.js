const trainee = {
  _id: 1,
  firstName: "Luv",
  lastName: "Panchal",
  aboutMe: "I code",
  profileImage: "users/1.png",
  academicDetails: {
    highestQualification: "B.E/B.Tech.",
    college: "Government Engineering College, Gandhinagar",
    university: "GTU",
    passoutYear: 2022,
  },
  contactDetails: {
    primaryEmailID: "aayush.adeshara@bacancy.com",
    alternateEmailID: "",
    primaryContactNo: 123,
    alternateContactNo: 456,
  },
  technologyAssigned: "ROR",
};

const alias = JSON.parse(JSON.stringify(trainee));
alias._id = "2";
alias.firstName = "ABC";
alias.lastName = "XYZ";
alias.contactDetails.primaryEmailID = "pqr@gmail.com";

console.log(trainee);
console.log(alias);
