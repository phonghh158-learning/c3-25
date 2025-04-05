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
