const btnGetmovies = document. querySelector(".btn-find");

const urlMovies='https://static.rviewer.io/challenges/datasets/dreadful-tomatoes/data.json';

btnGetmovies .onclick = async function(){
    // get information from url
    const answer= await fetch(urlMovies);
    const data = await answer.json();
    console.log(data.entries);


};
