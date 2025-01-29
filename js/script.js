document.addEventListener("DOMContentLoaded", function () {
  const showCard = document.getElementById("showCard");
  let movies = JSON.parse(localStorage.getItem("movies")) || [];

  function displayMovies() {
    if (!showCard) return;
    showCard.innerHTML = "";
    movies.forEach((movie, index) => {
      showCard.insertAdjacentHTML("beforeend", movieCard(movie, index));
    });
    deleteMovie();
  }

  function movieCard(movie, index) {
    return `
     <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${movie.imageurl}" alt="Movie Poster" style="width: 300px; height: 300px" />
                    </div>
                    <div class="flip-card-back">
                        <h3>${movie.title}</h3>
                        <h5>${movie.realisateur}</h5>
                        <h5>${movie.genre}</h5>
                        <h5>${movie.date}</h5>
                        <button id="suprimer" class="btn btn-danger delete-btn" data-index="${index}">Supprimer</button>
                        <button id="update" class="btn btn-success update-btn" data-index="${index}">Mettre à jour</button>
                    </div>
                </div>
            </div>`;
  }

  function deleteMovie() {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = this.getAttribute("data-index");
        movies.splice(index, 1);
        localStorage.setItem("movies", JSON.stringify(movies));
        displayMovies();
      });
    });
  }

  displayMovies();
});
