// panel ids
const input_title = document.getElementById("input_title");
const input_realisateur = document.getElementById("input_realisateur");
const input_genre = document.getElementById("input_genre");
const input_url = document.getElementById("input_url");
const input_date = document.getElementById("input_sortie");
const ajouter = document.getElementById("ajouter");

// index ids
const movie_img = document.getElementById("movie_img");
const movie_title = document.getElementById("movie_title");
const movie_realisateur = document.getElementById("movie_Realisateur");
const movie_genre = document.getElementById("movie_genre");
const movie_date = document.getElementById("movie_date");
const showCard = document.getElementById("showCard");
const suprimer = document.getElementById("suprimer");
const update = document.getElementById("mise_a_jour");

let movies = JSON.parse(localStorage.getItem("movies")) || [];

ajouter.addEventListener("click", function () {
    let movie = {
        title: input_title.value,
        realisateur: input_realisateur.value,
        genre: input_genre.value,
        date: input_date.value,
        imageurl: input_url.value
    };
    console.log(movie);
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));

    showCard.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${movies[i].imageurl}" alt="${movies[i].title}">
            <h2>${movies[i].title}</h2>
            <p>Realisateur: ${movies[i].realisateur}</p>
            <p>Genre: ${movies[i].genre}</p>
            <p>Date: ${movies[i].date}</p>
        `;
        showCard.appendChild(card);
    }
});
