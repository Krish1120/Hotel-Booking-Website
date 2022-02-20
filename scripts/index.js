logChange = () =>{
  if(count === 1){
  var btn = document.getElementById("logindis");
  btn.innerHTML = "LOGIN";
  window.location.reload();
  }
}
var viewCount =0;
view = () =>{
  if(viewCount===0){
    var more = document.getElementById('morelocations');
    more.style.display = "flex";
    viewCount =1;
    document.getElementById('viewbtn').innerHTML ="View Less"
  }else{
    var more = document.getElementById('morelocations');
    more.style.display = "none";
    viewCount = 0;
    document.getElementById('viewbtn').innerHTML ="View More"
  }
}