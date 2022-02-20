logChange = () =>{
  if(count === 1){
  var btn = document.getElementById("logindis");
  btn.innerHTML = "LOGIN";
  window.location.reload();
  }
}
getPrice = () =>{
  var tdate = new Date();
  var date = tdate.getDate();
  if(date < 10){
    date = '0' + date;
  }
  var month = tdate.getMonth() +1;
  if(month<10){
    month = '0' + month;
  }
  var year = tdate.getFullYear();
  var today = year + "-" + month + "-" + date;
  document.getElementById('indate').setAttribute('min',today);

  async function gettingPrice(){
    let promise = new Promise(function(resolve){
      var dateI1 = document.getElementById("indate").value;
      var dateI2 = document.getElementById("outdate").value;
      if(dateI1 !== "" && dateI2 !== ""){
      var date1 = new Date(dateI1);
      var date2 = new Date(dateI2);
      var time_difference = date2.getTime() - date1.getTime();
      var days = time_difference / (1000 * 60 * 60 * 24);
      let persons = document.forms["detailsForm"]["pcount"].value;
      const per = 1000;
      var resultPrice = persons*per*days; 
      resolve(resultPrice);
      }
    });
    let price = document.forms["detailsForm"]["total"];
    price.value = "Rs." + await promise;
  }
  gettingPrice();
}