const submitButton = document.getElementById("submit-data");

submitButton.addEventListener("click", function () {
  var user = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;

  var newRow = document.createElement("tr"); //Help from https://stackoverflow.com/questions/52997839/append-data-to-html-table
  var newuser = document.createElement("td");
  var newemail = document.createElement("td");
  var newaddress = document.createElement("td");
  var newadmin = document.createElement("td");

  if (user !== "" && email !== "" && address !== "") {
    if (document.getElementById("input-admin").checked) {
      newadmin.innerHTML = "X"; //help from https://www.geeksforgeeks.org/how-to-use-javascript-function-in-check-box/
    } else {
      newadmin.innerHTML = "-";
    }
    newuser.innerHTML = user;
    newemail.innerHTML = email;
    newaddress.innerHTML = address;
    newRow.append(newuser, newemail, newaddress, newadmin);
    document.getElementById("data").appendChild(newRow);
    document.getElementById("input-username").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-address").value = "";
  }
});

/*var table = document.getElementById("userdata");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = "user";
  cell2.innerHTML = "email";
  cell3.innerHTML = "address";
  cell4.innerHTML = "admin";*/

/*var admin = "x";

  var rows = "";
  rows +=
    "<td>" +
    user +
    "</td><td>" +
    email +
    "</td><td>" +
    address +
    "</td><td>" +
    admin +
    "</td>";

  var tbody = document.querySelector("userdata");
  var tr = document.createElement("tr");

  tr.innerHTML = rows;
  //tbody.appendChild(tr);*/
