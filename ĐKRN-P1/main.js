// Điều kiện rẽ nhánh - Phần 1.
// Bài 1:
function bai1(a,b){
    if(typeof a != "number" || typeof b != "number"){
        return "Không phải là số";
    }
    if (a>b){
        return a;
    }else{
        return b;
    }
}
document.write(bai1("1","2"));
document.write("<br>");

function tinhTong(a,b){
    return a + b;
}
document.write(tinhTong(3,5));
document.write("<br>");

function lapPhuong(a){
    return a*a;
}
document.write(lapPhuong(5));