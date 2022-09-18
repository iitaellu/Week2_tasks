const submitButton = document.getElementById("submit-data");

submitButton.addEventListener("click", function () {
  var user = document.getElementById("input-username").value;
  var email = document.getElementById("input-email").value;
  var address = document.getElementById("input-address").value;
  var admin = "";

  var newRow = document.createElement("tr"); //Help from https://stackoverflow.com/questions/52997839/append-data-to-html-table
  var newuser = document.createElement("td");
  var newemail = document.createElement("td");
  var newaddress = document.createElement("td");
  var newadmin = document.createElement("td");

  if (user !== "" && email !== "" && address !== "") {
    if (document.getElementById("input-admin").checked) {
      newadmin.innerHTML = "X"; //help from https://www.geeksforgeeks.org/how-to-use-javascript-function-in-check-box/
      admin = "X";
    } else {
      newadmin.innerHTML = "-";
      admin = "-";
    }
    newuser.innerHTML = user;
    newemail.innerHTML = email;
    newaddress.innerHTML = address;

    //How many rows are there
    var table = document.getElementById("userdata");
    var count = table.tBodies[0].rows.length;
    //Check if username is used already
    var exists = 0;
    for (var r = 0; r < count; r++) {
      //help from https://www.w3schools.com/jsref/coll_table_rows.asp
      if (document.getElementById("data").rows[r].cells[0].innerHTML === user) {
        var x = document.getElementById("data").rows[r].cells;
        x[1].innerHTML = email;
        x[2].innerHTML = address;
        x[3].innerHTML = admin;
        exists = 1;
        document.getElementById("input-username").value = "";
        document.getElementById("input-email").value = "";
        document.getElementById("input-address").value = "";
      }
    }
    if (exists === 0) {
      newRow.append(newuser, newemail, newaddress, newadmin);
      document.getElementById("data").appendChild(newRow);
      document.getElementById("input-username").value = "";
      document.getElementById("input-email").value = "";
      document.getElementById("input-address").value = "";
    }
  }
});

const emptyButton = document.getElementById("empty-table"); //help from https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
emptyButton.addEventListener("click", function () {
  var ntable = document.getElementById("data");
  ntable.innerHTML = "";
});
