const loginForm = document.querySelector('.login-form');
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const errorMessage = document.getElementById('error');

// Lấy dữ liệu người dùng từ localStorage
const usersStorage = JSON.parse(localStorage.getItem('users')) || [];

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Kiểm tra thông tin đăng nhập
    const foundUser = usersStorage.find(user => user.email === email && user.password === password);

    if (foundUser) {
        localStorage.setItem('currentUser', JSON.stringify(foundUser));
        window.location.href = '/index.html'; // Chuyển hướng sau đăng nhập
    } else {
        errorMessage.querySelector('p').textContent = "Invalid email or password!";
        errorMessage.style.display = 'block';
    }
});
