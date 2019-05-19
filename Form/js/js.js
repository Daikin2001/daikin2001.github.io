//page registed.html
var parameters;
var dataForm=[];
parameters = location.search.substring(1).split("&");

for (var i=0;i<parameters.length;i++){
    var index= parameters[i].indexOf('=');       
    var temp;
    temp=parameters[i].slice(index+1);
    // dataForm[i]=temp.replace(/+/g,"*");
    dataForm[i]=decodeURIComponent(temp.split('+').join(' '));
}
var register = {
    userName:dataForm[0],        
    email:dataForm[1],        
    pass:dataForm[2],
};

// const URL = decodeURIComponent(window.location.href);
// const data=[];

// for (let i = 0; i < data.length; i++) {
//     data[i] = data[i].split('=');
//     data[i][0] = '<b>' + data[i][0] + '</b>';
// }

$(document).ready(function() {
    
    //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
    $("#formRegister").validate({
        rules: {
            username: "required",
            email: "required",
            password: "required",
            confirm_password: "required"
        },
        messages: {
            username: "Please enter username",
            email: "Please enter email",
            password: "Please enter password",
            confirm_password: "Please enter confirm password"
        }
    });
});