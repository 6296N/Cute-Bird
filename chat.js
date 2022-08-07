// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDwQLcMW6KX1wM5NeFYpnX7njGB1TX1HVU",
    authDomain: "project-100-cute-bird.firebaseapp.com",
    projectId: "project-100-cute-bird",
    storageBucket: "project-100-cute-bird.appspot.com",
    messagingSenderId: "441570308964",
    appId: "1:441570308964:web:5034fc2e1cac1927eb0071"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



