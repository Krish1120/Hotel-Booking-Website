var count = 0;
logged = ()=>{
let user = document.forms["logform"]["uname"].value;
let pass = document.forms["logform"]["pswd"].value;
if(user === "admin" && pass === "admin"){
  alert("Successfully loggedin");
  var btn = document.getElementById("logindis");
  btn.innerHTML = "LOGOUT";
  btn.dataset.target = "";
  count = 1;
}
}