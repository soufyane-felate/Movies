// Display Movies and Handle Deletion
document.addEventListener("DOMContentLoaded", function () {
  const showCard = document.getElementById("showCard");
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  function displayMovies() {
    let display = "";
    for (let i = 0; i < movies.length; i++) {
      display += `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${movies[i].imageurl}" alt="Movie Poster" style="width: 300px; height: 300px" />
          </div>
          <div class="flip-card-back">
            <h3>${movies[i].title}</h3>
            <h5>${movies[i].realisateur}</h5>
            <h5>${movies[i].genre}</h5>
            <h5>${movies[i].date}</h5>
            <button class="btn btn-danger delete-btn" data-index="${i}">Supprimer</button>
            <button class="btn btn-success update-btn" data-index="${i}">Mettre à jour</button>
          </div>
        </div>
      </div>
      `;
    }
    showCard.innerHTML = display;
    attachDeleteEventListeners();
    attachUpdateEventListeners();
  }

  function attachDeleteEventListeners() {
    const deleteButtons = document.querySelectorAll(".delete-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        movies.splice(index, 1);
        saveMovies();
        displayMovies();
        console.log(movies);
      });
    });
  }

  function attachUpdateEventListeners() {
    const updateButtons = document.querySelectorAll(".update-btn");
    updateButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        const movie = movies[index];

        const newTitle = prompt("Enter new title:", movie.title);
        const newRealisateur = prompt("Enter new director:", movie.realisateur);
        const newGenre = prompt("Enter new genre:", movie.genre);
        const newDate = prompt("Enter new release date:", movie.date);
        const newImageUrl = prompt("Enter new image URL:", movie.imageurl);

        if (newTitle) movie.title = newTitle;
        if (newRealisateur) movie.realisateur = newRealisateur;
        if (newGenre) movie.genre = newGenre;
        if (newDate) movie.date = newDate;
        if (newImageUrl) movie.imageurl = newImageUrl;

        saveMovies();
        displayMovies();
        alert("Film mis à jour avec succès !");
      });
    });
  }

  function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  displayMovies();
});
