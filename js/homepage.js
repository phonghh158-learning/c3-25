document.addEventListener("DOMContentLoaded", function () {
    const movies = [
        { name: "Doraemon: Stand By Me 2", genre: "Animation", year: 2020, poster: "../images/homepage/movie-item/doraemon.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Your Name", genre: "Animation", year: 2016, poster: "../images/homepage/movie-item/yourname.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Spirited Away", genre: "Animation", year: 2001, poster: "../images/homepage/movie-item/spiritedaway.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Demon Slayer: Mugen Train", genre: "Animation", year: 2020, poster: "../images/homepage/movie-item/demonslayer.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "A Silent Voice", genre: "Animation", year: 2016, poster: "../images/homepage/movie-item/silentvoice.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Inception", genre: "Sci-Fi", year: 2010, poster: "../images/homepage/movie-item/inception.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "The Dark Knight", genre: "Action", year: 2008, poster: "../images/homepage/movie-item/darkknight.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Titanic", genre: "Romance", year: 1997, poster: "../images/homepage/movie-item/titanic.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "The Godfather", genre: "Crime", year: 1972, poster: "../images/homepage/movie-item/godfather.jpg", rating: Math.floor(Math.random() * 5) + 1 },
        { name: "Interstellar", genre: "Sci-Fi", year: 2014, poster: "../images/homepage/movie-item/interstellar.jpg", rating: Math.floor(Math.random() * 5) + 1 }
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
                    <div class="rating-star" data-rating="${movie.rating}"></div>
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

        // Cập nhật rating sao
        const ratingStar = movieItem.querySelector('.rating-star');
        const rating = movie.rating;
        ratingStar.style.setProperty('--rating', rating);

        movieList.appendChild(movieItem);
    });
});
