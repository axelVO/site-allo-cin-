


let target = document.getElementById('toto');

console.log(toto);

for (let i = 0; i < moovies.length; i++) {
    let J = 0;
    let title = moovies[i].Title;
    let poster = moovies[i].Poster;
    let img = moovies[i].Images[J];
    let img2 = moovies[i].Images[1];
    let img3 = moovies[i].Images[2];
    let plot = moovies[i].Plot;
    let year = moovies[i].Year;
    let Actors = moovies[i].Actors;
    let awards = moovies[i].Awards;
    let director = moovies[i].Director;
    let language  = moovies[i].Language;
    let released  = moovies[i].Released;
    let runtime = moovies[i].Runtime;
    let type = moovies[i].Type;
    let Writer = moovies[i].Writer;
    let Rating1 = moovies[i].imdbRating;
    let seasons = moovies[i].totalSeasons;
    let Rating2 = moovies[i].Metascore;


    var card = '<div class="card mb-3" style="max-width: 1240px;"><div class="row no-gutters"><div class="col-md-4"> <img src="' + poster + '" class="card-img" alt="..."></div><div class="col-md-8 vw-100<div class=" card-body"><h5 class="card-title text-center" id="titre"> ' + title + ' </h5><p class="text-center">'+year+'</p><p class="card-text text-center">'+plot+'</p><div class="img-fluid text-center"> <img src="'+img+'" class="" style="max-width: 10vw"> <img src="'+img2+'" class="" style="max-width: 10vw"> <img src="'+img3+'" class="" style="max-width: 10vw"></div><div class="text-center"><p>Actors:'+Actors+'</p><p>'+awards+'</p><p>Director:'+director+'</p><p>Language:'+language+'</p><p>Release:'+released+'</p><p>Time:'+runtime+'</p><p>Type:'+type+'</p> <p>'+Writer+'</p><p>imdbRating '+Rating1+'/10</p><p>Metascore '+Rating2+'/100</p><p>'+seasons+'</p></div>'

    // console.log(moovies[i].Title);
  


    target.innerHTML += card;
    J++
    console.log(img)
}







