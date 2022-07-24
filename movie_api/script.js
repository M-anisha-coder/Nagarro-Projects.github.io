const searching = document.getElementById('btn');

function getmovie(){
    var movieName = document.getElementById('search').value;
    const url =`https://www.omdbapi.com/?t=${movieName}&apikey=6607338b`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        
    
         document.getElementById('result').innerHTML = `
         <img src=${data.Poster} alt="movie_poster" width="200" height="200" style="border-radius:50%; border:2px solid white;">
         <h1> Title: ${data.Title}</h1>
         <h5> Release on: ${data.Year}</h5>
         <h5>Language: ${data.Language}</h5>
         <h4>Genre: ${data.Genre}</h4>
         <h4> Actors : ${data.Actors}</h4>

         <p>${data.Plot}</p>
       
         `    ;
    })
.catch(err=>{
    alert("movie not found")
    document.getElementById('result').style.visibility="hidden";
    document.getElementById('main').style.visibility="visible";
})

  
}


searching.addEventListener('click',()=>{
    document.getElementById('main').style.visibility="hidden";
    document.getElementById('result').style.visibility="visible";
    getmovie();
})
