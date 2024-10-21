// 获取表单和输入字段
const form = document.getElementById('signupForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// 表单提交事件监听
form.addEventListener('submit', (e) => {
    e.preventDefault();  // 防止表单默认提交

    let valid = true;

    // 验证用户名
    if (username.value.trim() === '') {
        showError(username, 'Username is required.');
        valid = false;
    } else {
        showSuccess(username);
    }

    // 验证邮箱格式
    if (!validateEmail(email.value)) {
        showError(email, 'Please enter a valid email address (e.g., aaa@aaa).');
        valid = false;
    } else {
        showSuccess(email);
    }

    // 验证密码
    if (password.value.trim() === '') {
        showError(password, 'Password is required.');
        valid = false;
    } else {
        showSuccess(password);
    }

    // 验证确认密码是否匹配，且不为空
    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Confirm Password is required.');
        valid = false;
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match.');
        valid = false;
    } else {
        showSuccess(confirmPassword);
    }

    // 如果所有字段都有效，则提交表单
    if (valid) {
        alert('Form submitted successfully!');
        form.reset();  // 重置表单
    }
});

// 实时验证确认密码
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value.trim() === '') {
        showError(confirmPassword, 'Confirm Password is required.');
    } else if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match.');
    } else {
        showSuccess(confirmPassword);
    }
});

// 显示错误信息，并应用 Bootstrap 的错误样式
function showError(input, message) {
    const formGroup = input.parentElement;
    input.classList.add('is-invalid');
    formGroup.querySelector('.invalid-feedback').textContent = message;
}

// 显示成功状态，并移除错误样式
function showSuccess(input) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
}

// 验证邮箱格式的函数
function validateEmail(email) {
    const re = /^[^@]+@[^@]+$/; // 只需用户名和域名部分
    return re.test(email);
}
