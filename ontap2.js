// Exercies JS Basic #2

// EX-1:





// EX-4
function chonHocVien(arr){
    let newarr=[];
    for (i=0;i<arr.length;i++){
        if(arr[i].charAt(0)=="h" || arr[i].charAt(0)=="H" ){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
var bai3 = function(a) {
    document.write("<h2>Bài 3: Quy đổi điểm số sang điểm chữ</h2>");
    if (a >= 0 && a <= 3.9) {
        document.write("<p>Bạn được điểm F</p>");
    }
    if (a > 3.9 && a <= 5.4) {
        document.write("<p>Bạn được điểm D</p>");
    }
    if (a > 4 && a <= 6.9) {
        document.write("<p>Bạn được điểm C</p>");
    }
    if (a > 6.9 && a <= 8.4) {
        document.write("<p>Bạn được điểm B</p>");
    }
    if (a > 8.4 && a <= 10) {
        document.write("<p>Bạn được điểm A</p>");
    }
    if (a < 0 || a > 10) {
        document.write("<p>Bạn nhập sai điểm</p>");
    }
};

function bai4(){
    for (var x = 0; x <= 100; x++) {
        if (x === 0) {
            document.write(x);
            document.write("<br>");
        } else if (x % 2 === 0) {
            document.write(x);
            document.write("<br>");
        } else {
            document.write(x);
            document.write("<br>");
        }
    }
}
function remainder(arr) {
    // tao mang moi de chua cac so du
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr[i] = arr[i] % 3;
    }
    return newArr;
}
