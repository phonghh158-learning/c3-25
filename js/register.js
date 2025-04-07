// Lấy form và các input
const registerForm = document.getElementById('register-form');
const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorMessage = document.getElementById('error');
const successMessage = document.getElementById('success');

// Lấy danh sách người dùng từ localStorage hoặc từ dữ liệu mặc định
let usersStorage = JSON.parse(localStorage.getItem('users')) || [
    { id: "0001", fullname: "Nguyễn Văn A", email: "vana@example.com", role: "user", password: "pass123" },
    { id: "0002", fullname: "Trần Thị B", email: "thib@example.com", role: "admin", password: "admin456" },
    { id: "0003", fullname: "Lê Văn C", email: "vanc@example.com", role: "user", password: "123456" },
    { id: "0004", fullname: "Phạm Thị D", email: "thid@example.com", role: "user", password: "abc123" },
    { id: "0005", fullname: "Hoàng Văn E", email: "vane@example.com", role: "admin", password: "admin123" },
    { id: "0006", fullname: "Đỗ Thị F", email: "thif@example.com", role: "user", password: "pass456" },
    { id: "0007", fullname: "Bùi Văn G", email: "vang@example.com", role: "user", password: "qwerty" },
    { id: "0008", fullname: "Võ Thị H", email: "thih@example.com", role: "user", password: "thih123" },
    { id: "0009", fullname: "Lý Văn I", email: "vani@example.com", role: "admin", password: "lyi789" },
    { id: "0010", fullname: "Ngô Thị J", email: "thij@example.com", role: "user", password: "user0010" },
    { id: "0011", fullname: "Mai Văn K", email: "vank@example.com", role: "user", password: "vank0011" },
    { id: "0012", fullname: "Tạ Thị L", email: "thil@example.com", role: "user", password: "thil0012" },
    { id: "0013", fullname: "Đinh Văn M", email: "vanm@example.com", role: "admin", password: "vanm0013" }
];

// Xử lý sự kiện submit form
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Kiểm tra nếu mật khẩu và xác nhận mật khẩu trùng khớp
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        return;
    }

    // Kiểm tra nếu email đã tồn tại
    const existingUser = usersStorage.find(user => user.email === email);
    if (existingUser) {
        errorMessage.textContent = "Email already registered!";
        errorMessage.style.display = 'flex';
        successMessage.style.display = 'none';
        return;
    }

    // Tạo ID mới cho người dùng
    const newId = String(usersStorage.length + 1).padStart(4, '0');

    // Tạo người dùng mới
    const newUser = { id: newId, fullname, email, role: "user", password };

    // Thêm người dùng vào mảng usersStorage
    usersStorage.push(newUser);

    // Lưu lại vào localStorage
    localStorage.setItem('users', JSON.stringify(usersStorage));

    // Hiển thị thông báo thành công
    successMessage.style.display = 'flex';
    errorMessage.style.display = 'none';
});
