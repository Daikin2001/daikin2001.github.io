$(function() {
    getUsers();
})

function getUsers() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/users",
    }).done(function(users) {
        renderContent(users);
    });
}

function createUser() {
    user1 = {
        name: $('#name1').val(),
        phone: $('#phone1').val(),
        gender: $('input[name=gender]:checked').val(),
        facebook: $('#facebook').val(),
    }

    $.ajax({
        method: "POST",
        data: user1,
        url: "http://localhost:3000/users",
    }).done(function(users) {
        redirect();
    });
}

function redirect() {
    location.href = 'http://localhost:3000'
}

function deleteUser(id) {
    var r = confirm("Delete?");
    if (r == true) {
        $.ajax({
            method: "DELETE",
            url: "http://localhost:3000/users/" + id
        }).done(function(users) {
            getUsers();
        });
    }
}

function updateUser(id, user) {
    $.ajax({
        method: "PUT",
        url: "http://localhost:3000/users/" + id,
        data: user
    }).done(function() {
        getUsers();
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
        htmlContent += '<td>' + '<button type="button" onclick="deleteUser(' + users[i].id + ')"> Delete </button> <button> Edit </button>'
        '</td>';

        htmlContent += '</tr>';
    }

    $('#myTable tbody').html(htmlContent);
}