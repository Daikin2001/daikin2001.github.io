$(function () {
    fetchData();
});

function getUsers() {
    $.ajax({
        method: 'GET',
        url: "https://localhost:3000/users",
    }).done(function (users) {
        renderContent(users);
    });
}

function createUser() {
    $.ajax({
        method: 'POST',
        url: "https://localhost:3000/users",
        data: {
            name: $('#name').val(),
            phone: $('#phone').val(),
            gender: $('#input[name=gender]:checked').val(),
            facebook: $('#facebook').val()
        }
    }).done(function (users) {
        redirect();
    });
}

function deleteUser(id) {
    $.ajax({
        method: 'DELETE',
        url: "https://localhost:3000/users/" + id
    }).done(function (users) {
        deleteUser();
    });
}

function updateUser(id,data) {
    $.ajax({
        method: 'PUT',
        url: "https://localhost:3000/users",
        data: user
    }).done(function (users) {
        updateUser();
    });
}

function renderContent(users) {
    var htmlContent = '';
    
    for (let i = 0; i < users.length; i++) {
        htmlContent += '<tr>';
        
        htmlContent += '<td>' + users[i].name + '</td>';
        htmlContent += '<td>' + users[i].gender + '</td>';
        htmlContent += '<td>' + users[i].facebook + '</td>';
        htmlContent += '<td>' + users[i].phone + '</td>';
        htmlContent += '<td>' + '<button> Delete </button>' + '</td>';
        
        htmlContent += '</tr>';
    }
    $('#myTable tbody').html(htmlContent);
}
function redirect(){
    location.href = 'http://localhost:3000';
}
