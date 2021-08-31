

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBytZWXvV-VsWzwLz67XLo5CQNmWICeaxI",
    authDomain: "practise-9e8c7.firebaseapp.com",
    databaseURL: "https://practise-9e8c7-default-rtdb.firebaseio.com",
    projectId: "practise-9e8c7",
    storageBucket: "practise-9e8c7.appspot.com",
    messagingSenderId: "683419541662",
    appId: "1:683419541662:web:d4591a10e693750a215b8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name -" + Room_names);
        row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName()
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
