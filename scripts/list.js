logChange = () =>{
  if(count === 1){
  var btn = document.getElementById("logindis");
  btn.innerHTML = "LOGIN";
  window.location.reload();
  }
}
viewMap = () =>{
  document.getElementById('listview').style.display = "none";
  document.getElementById('mapview').style.display = "flex";
}
viewList = () =>{
  document.getElementById('listview').style.display = "flex";
  document.getElementById('mapview').style.display = "none";
}