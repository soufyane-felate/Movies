// panel.js

document.addEventListener("DOMContentLoaded", function () {
  const input_title = document.getElementById("input_title");
  const input_realisateur = document.getElementById("input_realisateur");
  const input_genre = document.getElementById("input_genre");
  const input_url = document.getElementById("input_url");
  const input_date = document.getElementById("input_sortie");
  const ajouter = document.getElementById("ajouter");

  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  function clearInputs() {
    input_title.value = "";
    input_realisateur.value = "";
    input_genre.value = "";
    input_url.value = "";
    input_date.value = "";
  }

  if (ajouter) {
    ajouter.addEventListener("click", function () {
      let movie = {
        title: input_title.value,
        realisateur: input_realisateur.value,
        genre: input_genre.value,
        date: input_date.value,
        imageurl: input_url.value,
      };
      movies.push(movie);
      saveMovies();
      clearInputs();
      alert("Film ajouté avec succès !");
    });
  }
});

