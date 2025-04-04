document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        // Anime
        { name: "Doraemon: Stand By Me 2", genre: "Anime", year: 2020, poster: "../images/homepage/movie-item/doraemon.jpg" },
        { name: "Your Name", genre: "Anime", year: 2016, poster: "../images/homepage/movie-item/yourname.jpg" },
        { name: "Spirited Away", genre: "Anime", year: 2001, poster: "../images/homepage/movie-item/spiritedaway.jpg" },
        { name: "Demon Slayer: Mugen Train", genre: "Anime", year: 2020, poster: "../images/homepage/movie-item/demonslayer.jpg" },
        { name: "A Silent Voice", genre: "Anime", year: 2016, poster: "../images/homepage/movie-item/silentvoice.jpg" },
    
        // Khác thể loại
        { name: "Inception", genre: "Sci-Fi", year: 2010, poster: "../images/homepage/movie-item/inception.jpg" },
        { name: "The Dark Knight", genre: "Action", year: 2008, poster: "../images/homepage/movie-item/darkknight.jpg" },
        { name: "Titanic", genre: "Romance", year: 1997, poster: "../images/homepage/movie-item/titanic.jpg" },
        { name: "The Godfather", genre: "Crime", year: 1972, poster: "../images/homepage/movie-item/godfather.jpg" },
        { name: "Interstellar", genre: "Sci-Fi", year: 2014, poster: "../images/homepage/movie-item/interstellar.jpg" }
    ];
    

    const movieList = document.querySelector(".popular-movies-list");

    movies.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.classList.add("movie-item");

        // Thêm poster làm background
        movieItem.style.background = `url('${movie.poster}') no-repeat center center`;
        movieItem.style.backgroundSize = "cover";

        movieItem.innerHTML = `
            <div class="information">
                <div class="movie-name">${movie.name}</div>
                <div class="movie-information">
                    <p class="genre">${movie.genre}</p>
                    <p class="type">Movie</p>
                    <p class="year">${movie.year}</p>
                </div>
                <div class="item-fn">
                    <div class="rating-star" data-rating="${(Math.random() * 5).toFixed(1)}"></div>
                    <div class="buttons">
                        <a class="button" href="#" id="button-wishlist">
                            <i class="fi fi-rr-heart"></i>
                        </a>
                        <a class="button" href="#" id="button-watch">
                            Watch
                        </a>
                    </div>
                </div>
            </div>
        `;

        movieList.appendChild(movieItem);
    });
});
