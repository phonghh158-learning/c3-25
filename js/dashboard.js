// Đoạn JavaScript để hiển thị tổng số movies, categories và users
document.addEventListener('DOMContentLoaded', function () {
    // Lấy các phần tử trong HTML để hiển thị tổng số
    const totalMovies = document.getElementById('total-movies').querySelector('.item-value');
    const totalCategories = document.getElementById('total-categories').querySelector('.item-value');
    const totalUsers = document.getElementById('total-users').querySelector('.item-value');
    
    // Cập nhật các giá trị vào các phần tử HTML
    totalMovies.textContent = movies.length;
    totalCategories.textContent = categories.length;
    totalUsers.textContent = users.length;
});


let currentPage = 1; // Trang hiện tại
const itemsPerPage = 5; // Số phim mỗi trang

movies.sort((a, b) => b.year - a.year);

// Hàm lọc và render lại danh sách phim
function filterMovies() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = currentPage * itemsPerPage;
    const currentMovies = movies.slice(start, end); // Lấy các bộ phim cho trang hiện tại

    const tableBody = document.querySelector("#movies-table tbody");
    tableBody.innerHTML = ""; // Xóa các phim hiện tại

    currentMovies.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${movie.id}</td>
            <td>${movie.name}</td>
            <td>${movie.genre}</td>
            <td>${movie.language || "N/A"}</td>
            <td>${movie.year}</td>
            <td class="actions-buttons">
                <button class="action-button edit-button" onclick="editMovie('${movie.id}')"><i class="fi fi-rr-pencil"></i></button>
                <button class="action-button delete-button" onclick="deleteMovie('${movie.id}')"><i class="fi fi-rr-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    renderPagination(Math.ceil(movies.length / itemsPerPage));
}

// Hàm render phân trang
function renderPagination(totalPages) {
    const paginationEl = document.querySelector(".pagination");
    paginationEl.innerHTML = "";  // Xóa các nút cũ

    if (totalPages <= 1) {
        paginationEl.innerHTML = `<button class="page-btn active" onclick="goToPage(1)">1</button>`;
        return;
    }

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

// Hàm chỉnh sửa bộ phim (chưa xử lý, chỉ để demo)
function editMovie(id) {
    alert("Edit movie with ID: " + id);
}

// Hàm xóa phim
function deleteMovie(movieId) {
    // Xóa phim khỏi mảng movies
    const movieIndex = movies.findIndex(movie => movie.id === movieId);
    if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);  // Xóa phần tử khỏi mảng
        filterMovies();  // Gọi lại hàm lọc để render lại danh sách
    }
}

// Gọi hàm để hiển thị ban đầu
filterMovies();
