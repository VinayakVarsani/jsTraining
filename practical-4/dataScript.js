console.log(localStorage);

if (localStorage.length !== 0) {
  var table = document.getElementById("dataEmployee");

  for (var a in localStorage) {
    if (
      a == "length" ||
      a == 'cleaclass="form-element"r' ||
      a == "getItem" ||
      a == "Key" ||
      a == "clear"
    ) {
      continue;
    }
    var i = 0;
    let newRow = table.insertRow(-1);
    let newCell = newRow.insertCell(i);
    var cellvalue = a;
    let newText = document.createTextNode(cellvalue);
    newCell.appendChild(newText);
    let obj = JSON.parse(localStorage[a]);
    for (var ab in obj) {
      var val = obj[ab];
      let newCell = newRow.insertCell(++i);
      let newText = document.createTextNode(val);
      newCell.appendChild(newText);
    }

    let lastCell = newRow.insertCell(++i);
    lastCell.innerHTML =
      '<button class="btn btn-dark"onclick=deletefun(' +
      a +
      ") >delete</button>";
  }
}

function deletefun(id) {
  let value = confirm("Are you sure you want to delete?");
  if (value == true) {
    localStorage.removeItem(id);
    location.reload();
  }
}

function myFunction() {
  var title = document.querySelector('input[name="title"]:checked').value;
  var fname = document.getElementById("firstName").value;
  var mname = document.getElementById("middleName").value;
  var lname = document.getElementById("lastName").value;
  const name = title + " " + fname + " " + mname + " " + lname;

  var gender = document.querySelector('input[name="gender"]:checked').value;

  var emailID = document.getElementById("emailID").value;
  var contactNo = document.getElementById("mobileNumber").value;
  var houseNo = document.getElementById("houseNo").value;
  var addressline1 = document.getElementById("addressline1").value;
  var addressline2 = document.getElementById("addressline2").value;
  var landmark = document.getElementById("landmark").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  var pincode = document.getElementById("pincode").value;
  const contactDetails =
    emailID +
    " " +
    contactNo.toString() +
    " " +
    houseNo +
    " " +
    addressline1 +
    " " +
    landmark +
    " " +
    city +
    " " +
    state +
    " " +
    country +
    " " +
    pincode;

  var designation = document.getElementById("designation").value;
  var technologiesKnown = document.getElementById("technologiesKnown").value;
  var careerStartDate = document.getElementById("careerStartDate").value;

  var years =
    new Date(new Date() - new Date(careerStartDate)).getFullYear() - 1970;
  years = years.toString();

  const EmpObj = {
    name: name,
    gender: gender,
    contactDetails: contactDetails,
    designation: designation,
    technologiesKnown: technologiesKnown,
    careerStartDate: years,
  };

  var value = JSON.stringify(EmpObj);
  let key = Math.floor(1000 + Math.random() * 9000);

  window.localStorage.setItem(key, value);

  location.reload();
}
