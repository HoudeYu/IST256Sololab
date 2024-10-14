// 获取表单和输入框元素
const form = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// 表单提交事件监听器
form.addEventListener('submit', function (e) {
    e.preventDefault(); // 阻止表单的默认提交行为

    let valid = true; // 追踪表单的有效状态

    // 清除所有错误状态
    clearErrors();

    // 检查用户名
    if (username.value.trim() === '') {
        showError(username, 'Username is required.');
        valid = false;
    }

    // 检查电子邮件格式
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        showError(email, 'Please enter a valid email.');
        valid = false;
    }

    // 检查密码
    if (password.value.trim() === '') {
        showError(password, 'Password is required.');
        valid = false;
    }

    // 检查确认密码是否匹配
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match.');
        valid = false;
    }

    // 如果所有字段都有效，则提交表单
    if (valid) {
        alert('Signup successful!');
        form.submit();
    }
});

// 显示错误消息并将输入框变为红色
function showError(input, message) {
    const errorMessage = input.nextElementSibling; // 获取下一个小提示元素
    errorMessage.textContent = message; // 设置错误消息
    errorMessage.style.display = 'block'; // 显示错误消息
    input.classList.add('is-invalid'); // 添加错误样式
}

// 清除所有错误状态
function clearErrors() {
    document.querySelectorAll('.is-invalid').forEach(input => input.classList.remove('is-invalid'));
    document.querySelectorAll('.error-message').forEach(msg => (msg.style.display = 'none'));
}
