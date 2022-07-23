const searching = document.getElementById('btn');

function getmovie(){
    var movieName=document.getElementById('search').value;
      var yourkey="6607338b" ;
      const url ='http://www.omdbapi.com/?apikey=[yourkey]& ';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
         document.getElementById('result').innerHTML =

        <h1>${data.Title}</h1>,
        <span>${data.Year}</span>,
        <h4> Release date ${data.Released}</h4>,
        <h4>Genre: ${data.Genre}</h4>,
        <h5>Language: ${data.Language}</h5>,
        <p>${data.Plot}</p>,
        <h5>${data.Ratings}</h5> 
       
        
    })
.catch(err=>alert("movie not found"))
  
}


searching.addEventListener('click',()=>{
    document.getElementById('main').style.visibility="hidden";
    document.getElementById('result').style.visibility="visible";
    getmovie();
})