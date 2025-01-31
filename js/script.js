document.addEventListener("DOMContentLoaded", function () {
  const showCard = document.getElementById("showCard");
  let movies = JSON.parse(localStorage.getItem("movies")) || [];
  // afficher les films
  function displayMovies() {
    let display = "";
    for (let i = 0; i < movies.length; i++) {
      display += `
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src="${movies[i].imageurl}" alt="Movie Poster" style="width: 300px; height: 300px" />
          </div>
         <div class="flip-card-back d-flex flex-column align-items-center text-center p-3">
          <h3 class="fs-4">${movies[i].title}</h3>
         <p class="fs-6">
            Le réalisateur de ce film est <strong>${movies[i].realisateur}</strong>, 
            il appartient au genre <strong>${movies[i].genre}</strong> 
            et est sorti le <strong>${movies[i].date}</strong>.
          </p>

          <div class="d-flex gap-2 mt-3">
            <button class="btn btn-danger delete-btn btn-sm" data-index="${i}">Supprimer</button>
            <button class="btn btn-success update-btn btn-sm" data-index="${i}">Mettre à jour</button>
            <div class="form-check form-switch">
           
            
            </div>

          </div>
</div>

        </div>
      </div>
      `;
    }
    showCard.innerHTML = display;
    attachEventListeners();
  }

  function attachEventListeners() {
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        movies.splice(index, 1);
        saveMovies();
        displayMovies();
      });
    });

    document.querySelectorAll(".update-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const index = event.target.getAttribute("data-index");
        console.log("Modifier film index:", index);

        if (index !== null) {
          const movie = movies[index];

          document.getElementById("editMovieIndex").value = index;
          document.getElementById("editMovieTitle").value = movie.title;
          document.getElementById("editMovieRealisateur").value =
            movie.realisateur;
          document.getElementById("editMovieGenre").value = movie.genre;
          document.getElementById("editMovieDate").value = movie.date;
          document.getElementById("editMovieImageUrl").value = movie.imageurl;

           let editMovieModal = new bootstrap.Modal(
            document.getElementById("editMovieModal")
          );
          editMovieModal.show();
        }
      });
    });
  }

  document.getElementById("saveMovieChanges").addEventListener("click", () => {
    const index = document.getElementById("editMovieIndex").value;

    if (index !== "") {
      movies[index] = {
        title: document.getElementById("editMovieTitle").value,
        realisateur: document.getElementById("editMovieRealisateur").value,
        genre: document.getElementById("editMovieGenre").value,
        date: document.getElementById("editMovieDate").value,
        imageurl: document.getElementById("editMovieImageUrl").value,
      };

      saveMovies();
      displayMovies();

      console.log("Mise à jour film:", movies[index]);

      let editMovieModal = bootstrap.Modal.getInstance(
        document.getElementById("editMovieModal")
      );
      editMovieModal.hide();
    }
  });

  function saveMovies() {
    localStorage.setItem("movies", JSON.stringify(movies));
  }

  displayMovies();
});
