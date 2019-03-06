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
    return a*a*a;
}
document.write(lapPhuong(5));
document.write("<br>");

function tongBinhPhuongcua2So(a,b){
    return (a*a)+(b*b);
}
document.write(tongBinhPhuongcua2So(5,6));
document.write("<br>");

function tongLapPhuong2so(a,b){
    return (a*a*a)+(b*b*b);
}
document.write(tongLapPhuong2so(5,6));
document.write("<br>");

function binhPhuongCuaTong2so(a,b){
    return (a+b)*2;
}
document.write(binhPhuongCuaTong2so(5,2));
document.write("<br>");