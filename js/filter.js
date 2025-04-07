function populateSelectOptions() {
    const genreSelect = document.getElementById("genre");
    const yearSelect = document.getElementById("year");
    const languageSelect = document.getElementById("language");

    // Thêm genre từ categories
    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category.name;
        option.textContent = category.name;
        genreSelect.appendChild(option);
    });

    // Thêm year từ 1950 đến năm hiện tại
    const currentYear = new Date().getFullYear();
    for (let year = 1950; year <= currentYear; year++) {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }

    // Thêm ngôn ngữ mẫu
    const languages = ["English", "Vietnamese", "Japanese", "Korean", "French", "Spanish"];
    languages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageSelect.appendChild(option);
    });
}

// Gọi hàm để thêm dữ liệu vào các select
populateSelectOptions();




let currentPage = 1;  // Trang hiện tại
const itemsPerPage = 10;  // Số item trên mỗi trang

// Hàm render lại các phim theo trang
function renderMovies(filteredMovies) {
    const totalMovies = filteredMovies.length;
    const totalPages = Math.ceil(totalMovies / itemsPerPage);  // Tính tổng số trang

    // Cập nhật tổng số phim
    const resultText = document.querySelector(".filter-result span");
    resultText.textContent = totalMovies;

    // Tính toán phim cần hiển thị cho trang hiện tại
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    const moviesToDisplay = filteredMovies.slice(start, end);

    // Render các phim
    const moviesListEl = document.querySelector(".movies-list");
    moviesListEl.innerHTML = "";  // Xóa các phim cũ
    moviesToDisplay.forEach(movie => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";
        movieItem.style.background = `url(${movie.poster}) no-repeat center center`;
        movieItem.style.backgroundSize = "cover";
        movieItem.innerHTML = `
            <div class="information">
                <div class="movie-name" title="${movie.name}">${movie.name}</div>
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
                        <a class="button" href="#" id="button-watch">Watch</a>
                    </div>
                </div>
            </div>
        `;
        // Cập nhật rating sao
        const ratingStar = movieItem.querySelector('.rating-star');
        const rating = movie.rating;
        ratingStar.style.setProperty('--rating', rating);
        
        moviesListEl.appendChild(movieItem);
    });

    // Render các nút phân trang
    renderPagination(totalPages);
}

// Hàm render phân trang
function renderPagination(totalPages) {
    const paginationEl = document.querySelector(".pagination");
    paginationEl.innerHTML = "";  // Xóa các nút cũ

    // Nếu chỉ có 1 trang, hiển thị nút trang 1
    if (totalPages <= 1) {
        paginationEl.innerHTML = `<button class="page-btn active" onclick="goToPage(1)">1</button>`;
        return;
    }

    // Tạo các nút trang
    let buttons = [];
    for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
    }

    // Nếu có nhiều trang hơn 5, bắt đầu thêm dấu ...
    if (totalPages > 6) {
        if (currentPage <= 3) {
            buttons = [1, 2, 3, "...", totalPages];
        } else if (currentPage >= totalPages - 2) {
            buttons = [1, "...", totalPages - 2, totalPages - 1, totalPages];
        } else {
            buttons = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
        }
    }

    // Thêm các nút phân trang vào DOM
    buttons.forEach(page => {
        const pageButton = document.createElement("button");
        pageButton.className = `page-btn ${page === currentPage ? "active" : ""}`;
        pageButton.textContent = page;
        pageButton.onclick = () => goToPage(page);
        paginationEl.appendChild(pageButton);
    });
}

// Chuyển trang
function goToPage(pageNumber) {
    currentPage = pageNumber;
    filterMovies();  // Lọc và render lại phim
}

// Hàm lọc phim
function filterMovies() {
    let filtered = movies;

    const genreSelect = document.getElementById('genre');
    const languageSelect = document.getElementById('language');
    const yearSelect = document.getElementById('year');
    const ratingSelect = document.getElementById('rating');

    const genre = genreSelect.value;
    const language = languageSelect.value;
    const year = yearSelect.value;
    const rating = ratingSelect.value;

    if (genre !== "top-genre") {
        filtered = filtered.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
    }
    if (language !== "top-language") {
        filtered = filtered.filter(m => m.language && m.language.toLowerCase() === language.toLowerCase());
    }
    if (year !== "top-year") {
        filtered = filtered.filter(m => m.year == year);
    }
    if (rating !== "top-rating") {
        filtered = filtered.filter(m => m.rating == rating);
    }

    renderMovies(filtered);
}

// Gán sự kiện lọc khi thay đổi select
document.querySelectorAll('select').forEach(select => {
    select.addEventListener("change", () => {
        currentPage = 1;  // Quay về trang 1 khi thay đổi bộ lọc
        filterMovies();
    });
});

// Load mặc định toàn bộ phim
filterMovies();
