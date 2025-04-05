// Lắng nghe sự kiện click trên các liên kết trong thanh điều hướng
document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Xóa class 'active' từ tất cả các liên kết
        document.querySelectorAll('.nav-link').forEach(function(link) {
            link.classList.remove('active');
        });

        // Thêm class 'active' vào liên kết hiện tại
        this.classList.add('active');

        // Lấy phần tử cần hiển thị từ thuộc tính 'data-section' của liên kết
        const sectionToShow = this.getAttribute('data-section');

        // Ẩn tất cả các section
        document.querySelectorAll('.section').forEach(function(section) {
            section.classList.add('hidden');
        });

        // Hiển thị phần tử tương ứng
        document.getElementById(sectionToShow).classList.remove('hidden');
    });
});
