        /* Bai 1 */
        var now = new Date(); // Lấy thời gian hiện tại
        var date = now.getDate(); // Lấy ngày từ thời gian hiện tại
        var month = now.getMonth() + 1; // Lấy tháng từ thời gian hiện tại. Do tháng trong javascript tính từ 0 - 11 nên phải +1
        var year = now.getFullYear(); // Lấy năm (đầy đủ 4 số) từ thời gian hiện tại
        
        document.write();
        document.write(date);
        document.write(month);
        document.write(year);
        document.write('<br/>');
        
        /* Bai 2 */
        
        function catchuoi(str) {
            if (str.length < 10) {
                document.write(str);
            } else {
                document.write(str.slice(0, 10));
            }
            document.write('<br/>');
        }
        catchuoi("Hello, I'm Dat");
        
        /* other */
        function catchuoi(str) {
            if (str.length < 10) {
                document.write(str);
            } else {
                document.write(str.slice(0, 20));
            }
            document.write('<br/>');
        }
        catchuoi("Hello, I'm Dat here, I'm doing good!");
        /* Bai 3 */
        function rating(x) {
            var kq;
            if (x >= 0 && x <= 3.9)
            kq = "F";
            else if (x >= 4 && x <= 5.4)
            kq = "D";
            else if (x >= 5.5 && x <= 6.9)
            kq = "C";
            else if (x >= 7 && x <= 8.4)
            kq = "B";
            else if (x >= 8.5 && x <= 10)
            kq = "A";
            else
            kq = "Invaild Rating Score!"
            return document.write("Điểm " + kq);
        }
        rating(bai3);
        
        /* Bai 4 */
        function translate(code) {
            switch (code) {
                case 33: //Pháp
                document.write("Bonjour - France<br/>");
                break;
                case 49: //Đức
                document.write("Hallo - Germany<br/>");
                break;
                case 81: //Nhật
                document.write("こんにちは - Japanese<br/>");
                break;
                case 86: //TQ
                document.write("你好 - China<br/>");
                break;
                case 856: //Lào
                document.write("ສະບາຍດີ - Laos<br/>");
                break;
                default:
                document.write("Xin chào - Vietnam<br/>");
                break;
                case 17: //Ba Lan
                document.write("Cześć - Polish<br/>");
                break;
            }
        }
        for (var i = 0; i < bai4.length; i++)
        translate(bai4[i]);
        
        /* Bài 5 */
        for (var i = 0; i < mang.length; i++) {
            if (mang[i] == true) {
                document.write("Giá trị True xuất hiện đầu tiên ở vị trí thứ: " + (i + 1));
                break;
            }
        }
    }
    check(bai5);
    
    
    /* Bài 6 */
    function shownum() {
        for (var i = 1; i <= 100; i + 2) {
            document.write("<span style='color:black'>" + i + " " + "</span>");
            document.write("<span style='color:blue'>" + i + " " + "</span>");
        }
    }
    shownum();
    document.write("<br><br><br><br><br>");
    