function addUser(){
username = document.getElementById("user_name").value;
localStorage.setItem("USER'S_NAME",username);
window.location = "kwitter_room.html";    
}