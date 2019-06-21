// Exercies JS Basic #1

// EX-1:

function tinhLapPhuong(a){
    return (a*a*a);
}
document.write(tinhLapPhuong());

function tinhHieu(a,b){
    return (a-b)
}
document.write(tinhHieu());
function tinhTich(a,b){
    return (a*b)
}
document.write(tinhTich());
function tinhThuong(a,b){
    return (a/b)
}
document.write(tinhThuong());
// Temperatures Converter (CodePen)
function FtoC(fahrenheit) 
{
    var fTemp = fahrenheit;
    var FToCel = (fTemp * 9/5)+ 32;
    var message = 'Nhiệt độ hiện tại là ' +fTemp+'\xB0F' + ' = ' + FToCel + '\xB0C.';
    document.write(message);
}

function CtoF(celsius) 
{
    var cTemp = celsius;
    var CToFah = (cTemp - 32)*5 / 9;
    var message = 'Nhiệt độ hiện tại là ' +cTemp+'\xB0C' + ' = ' + CToFah + '\xB0F.';
    document.write(message);
} 
CtoF(68);
FtoC(20);

// EX-2

function squart(a){
    return Math.sqrt(a);
}

function centuryFromYear(year) {
    var newYear = year.toString().length;
    var stYear
    if (newYear >= 4){
        stYear = year.toString().substring(0, 2);
        if (year % 100 !== 0){ 
            return (parseInt(stYear)+1);
        } else {
            return parseInt(stYear);  
        };
    } else if (newYear >= 3){
        stYear = year.toString().substring(0,1);
        if (year % 100 !== 0){ 
            return (parseInt(stYear)+1);
        } else {
            return parseInt(stYear);  
        };
    } else if (newYear < 3){
        return 1;
    };
};
document.write(centuryFromYear("2019"));

function str(n) {
    function a() {
        if (n.length < 10) {
            console.log(n);
        } else {
            console.log(n.slice(0, 10) + "...");
        }
    }
    
    if (typeof n == "string") {
        a();
    } else if (typeof n == "number") {
        n = n + "";
        a();
    }
}
function captializeStr(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// EX-3
function sortStudents(arr) {
    //console.log(arr.sort);
console.log(arr.sort());
return arr.sort();
}

sortStudents(["Dat","Thai","Binh","Hao","Oanh"]);

let nums1 = [1,2,3];

let maxNums = [1,2,3,4];

let students = ['Nam','Hoa','Tuấn'];

students.reverse();