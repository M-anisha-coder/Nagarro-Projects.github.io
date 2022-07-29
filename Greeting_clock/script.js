var hour=prompt("Can you tell me the time (in hour) ");
var min=prompt("Can you tell me the time (in min)");
var am_pm=prompt("am or pm");

  document.getElementById('hour').innerHTML= hour;
  document.getElementById('min').innerHTML= min;
  document.getElementById('am-pm').innerHTML= am_pm;
  if(am_pm=="am"){
    if(5>=hour && hour>=1 || hour==12){
      document.getElementById('greeting').innerHTML= "Good Night";
      document.getElementById('pic').src="https://media.istockphoto.com/vectors/night-landscape-with-moon-sea-or-ocean-sky-and-clouds-scenic-view-on-vector-id1258106836?k=20&m=1258106836&s=170667a&w=0&h=KmqMx2XuwkDrCrT4Fxc_ShNwCQkBV1-VLDJgmbP6Tr4=";
    }
    else if(hour=>6 && hour<=11){
      document.getElementById('greeting').innerHTML= "Good Morning";
      document.getElementById('pic').src="https://wallpaperaccess.com/full/1534864.jpg";
    }
    
  }
  else if(am_pm=="pm"){
    if(hour==12 || hour>=1 && hour<=4){
      document.getElementById('greeting').innerHTML= "Good Afternoon";
      document.getElementById('pic').src="https://img.freepik.com/free-photo/beautiful-tropical-beach-sea_74190-6796.jpg?w=2000";
    }
    else if(hour>=5 && hour<=7){
      document.getElementById('greeting').innerHTML= "Good Evening";
      document.getElementById('pic').src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Sunset_in_the_evening.jpg";
    }
    else if(hour>=8 && hour<=11){
      document.getElementById('greeting').innerHTML= "Good Night";
      document.getElementById('pic').src="https://media.istockphoto.com/vectors/night-landscape-with-moon-sea-or-ocean-sky-and-clouds-scenic-view-on-vector-id1258106836?k=20&m=1258106836&s=170667a&w=0&h=KmqMx2XuwkDrCrT4Fxc_ShNwCQkBV1-VLDJgmbP6Tr4=";
    }
  }







 

