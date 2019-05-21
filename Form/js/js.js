function submitForm() {
    let isValid = true;
    
    $('.error').text('');
    
    // Kiểm tra tên
    if ($('#name').val().trim().length <= 0) {
        isValid = false;
        $('#name-error').text('Please enter your name!');
    }
    
    // Kiểm tra email
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test($('#email').val()) === false) {
        isValid = false;
        $('#email-error').text('Email is not valid!');
    }
    
    // Kiểm tra password
    const passwordRegex1 = /^[a-zA-Z0-9]{9,}$/;
    const passwordRegex2 = /[A-Z]+/;
    const passwordRegex3 = /[0-9]+/;
    const password = $('#password').val();
    
    if (passwordRegex1.test(password) === false ||
    passwordRegex2.test(password) === false ||
    passwordRegex3.test(password) === false) {
        isValid = false;
        $('#password-error').text('Password must greater than 8 alphabet characters and contain at least 1 uppercase letter and 1 digit!');
    }
    
    if (isValid) {
        window.location.href = 'result.html';
    } else {
        event.preventDefault();
        return false;
    }
}