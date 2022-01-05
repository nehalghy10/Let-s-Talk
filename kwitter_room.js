var firebaseConfig = {
      apiKey: "AIzaSyD1g6T8K7zydauORZhcCKRjErK3PuBoIjs",
      authDomain: "kwitter-f6d97.firebaseapp.com",
      databaseURL: "https://kwitter-f6d97-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6d97",
      storageBucket: "kwitter-f6d97.appspot.com",
      messagingSenderId: "401814678136",
      appId: "1:401814678136:web:3925e6486dbe881cc9db8d",
      measurementId: "G-P09Z710NYE"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "aading room name"
      });
      
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id ="+Room_Name+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}