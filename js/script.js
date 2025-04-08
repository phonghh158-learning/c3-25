window.addEventListener('load', function() {
    // Chỉ lưu nếu localStorage chưa có
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Dữ liệu users đã được lưu vào localStorage.');
    } else {
        console.log('localStorage đã có dữ liệu users. Không ghi đè.');
    }
});