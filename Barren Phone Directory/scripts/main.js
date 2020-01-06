// Initialize Firebase
var config = {
  apiKey: "AIzaSyBBPOdrWkJFBhopBsaRczi12hibJn19eRQ",
  authDomain: "bcpd-cccc0.firebaseapp.com",
  databaseURL: "https://bcpd-cccc0.firebaseio.com",
  projectId: "bcpd-cccc0",
  storageBucket: "bcpd-cccc0.appspot.com",
  messagingSenderId: "37680251991"
};
firebase.initializeApp(config);

/* object model
Building: "Annex"
Extention: 11203
First: "Shawna "
Last: "Shartzer"
Room: 203
*/

function loadContact(contact) {
  /* Table Structure */
  /* <table id="myTable">
    <thead>
      <tr>
        <th>Last</th>
        <th>First</th>
        <th>Room #</th>
        <th>Building</th>
        <th>Extension</th>
      </tr>
    </thead>
    <tbody id="myTableBody" />
  </table>; */

  let table = document.getElementById("myTable");

  let row = table.insertRow(-1);

  let lastCell = row.insertCell(0);
  let firstCell = row.insertCell(1);
  let roomCell = row.insertCell(2);
  let buildingCell = row.insertCell(3);
  let extensionCell = row.insertCell(4);

  lastCell.innerHTML = contact.Last;
  firstCell.innerHTML = contact.First;
  buildingCell.innerHTML = contact.Building;
  roomCell.innerHTML = contact.Room;
  extensionCell.innerHTML = contact.Extention;
}

var ref = firebase.database().ref();
ref.on("value", function(snapshot) {
  let contacts = snapshot.val();
  contacts.forEach(contact => {
    loadContact(contact);
  });
});
function filter() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
          }
        }       
      }
    }
  }       
}