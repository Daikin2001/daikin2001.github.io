getUsersById(id1);

function getUsersById(id) {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/users",
    }).done(function(users) {
        renderContent(users);
        // location.href = "http://localhost:3000/edituser.html";
    });
}

// function renderContentById(users) {
// var htmlContent = '';

//htmlContent += '<input ' + ' type="text" name="Tên" id="name1" placeholder=" ' + users.name + ' " /><br> '
//htmlContent += '<input ' + ' type="text" name="Tên" id="name1" placeholder=" ' + users.phone + ' " /><br>'
//htmlContent += '<input ' + ' type="text" name="Tên" id="name1" placeholder=" ' + users.facebook + ' " /><br>'
//    $('wrap').html(htmlContent);
//}