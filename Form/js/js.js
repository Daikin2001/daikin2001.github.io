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
    confirmpassword:dataForm[3]
};