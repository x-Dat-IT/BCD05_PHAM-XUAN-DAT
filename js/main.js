/**
 * Khối 1:
 * diemChuan
 * diemTongKet
 * diemUuTien
 * chonKhuVuc
 * chonDoiTuong
 * *Khối 2:
 * B1: Tạo Bảng khuVuc và doiTuong;
 * B2:Lấy gía trị form
 * B3:Kiêm tra thuộc khuVuc và doiTuong gì;
 * B4:ar tongDiem = 0;
if(diemMon1>0 && diemMon2>0 && diemMon3>0) {
tongDiem = diemMon3 + diemMon2 + diemMon1 + doiTuong + khuVuc;
  if(tongDiem >= diemChuan) {
   document.getElementById("txtXuat").innerHTML = "Chúc Mừng Bạn Đã Đậu"  
   }else{
    document.getElementById("txtXuat").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
   }
}else{
 document.getElementById("txtXuat").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
}
}
 * Khối 3: Out Put
 * Xuất Kết Quả
 */

// ............BÀI lÀM 1 .........


function ketQua() {
//Gán Giá Trị Cho Biến 
var doiTuong = Number(document.getElementById("chonDoiTuong").value);
var khuVuc = Number(document.getElementById("chonKhuVuc").value);
var diemChuan = Number(document.getElementById("diemChuan").value);
var diemMon1 = Number(document.getElementById("diemMon1").value);
var diemMon2 = Number(document.getElementById("diemMon2").value);
var diemMon3 = Number(document.getElementById("diemMon3").value);
// --------------------------------------------------------------
var tongDiem = 0;
if(diemMon1>0 && diemMon2>0 && diemMon3>0) {
tongDiem = diemMon3 + diemMon2 + diemMon1 + doiTuong + khuVuc;
  if(tongDiem >= diemChuan) {
   document.getElementById("txtXuat").innerHTML = "Chúc Mừng Bạn Đã Đậu"  
   }else{
    document.getElementById("txtXuat").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
   }

}else{
 document.getElementById("txtXuat").innerHTML = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
}
}


// ..................Bài 2,,,,,,,,,,,,,,,,
/**
 * Mô Hình 3 Khối
 * 
 * Khối 1 Input
 * Tên 
 * số KW
 * 
 * Khối 2
 * 50kw : 500đ/kw
 * 50:-->:650đ
 * 100kw->:850đ
 * 150kw->1100đ
 * còn lại 1300đ
 * B1: Tạo biến và gán biến cho người dùng nhập vào 
 * B2 : Lập Công thức tính từng phần tiền điện 
 *   var tienDien = 0;
    if(0 < soKw && soKw <=50){
        tienDien = soKw * giaDien;
    }else if(50 < soKw && soKw <= 100){
        tienDien = (giaDien*50) + (soKw-50) * giaDien_50;
    }else if(100 < soKw && soKw <= 150){
        tienDien = (giaDien*50) + (giaDien_50*50) + (soKw-100) * giaDien_100;
    }else if(150 < soKw && soKw <= 200){
        tienDien = (giaDien*50) + (giaDien_50*50) + (giaDien_100*50) + (soKw-150) * giaDien_150;
    }else if( 200 < soKw){
        tienDien = (giaDien*50) + (giaDien_50*50) + (giaDien_100*50) + (giaDien_150*50) + (soKw - 200) * giaDien_1300;
    }else{
        alert("Hãy nhập lại KW");
    }
    B3: gán biến onclick để cho người dùng nhấn
 * Khối 3: OUT PUT
 * Xuất Kết Quả
 * 
 */


// ----------------Bài Tập Tính Tiền Điện ------------ 


    const giaDien = 500;
    const giaDien_50 = 650;
    const giaDien_100 = 850;
    const giaDien_150 = 1100;
    const giaDien_1300 = 1300;
function tienDien() {
    var hoTen = document.getElementById("hoTen").value;
    var soKw = Number(document.getElementById("nhapSoKw").value);


    var tienDien = 0;
    if(0 < soKw && soKw <=50){
        tienDien = soKw * giaDien;
    }else if(50 < soKw && soKw <= 100){
        tienDien = (giaDien*50) + (soKw-50) * giaDien_50;
    }else if(100 < soKw && soKw <= 150){
        tienDien = (giaDien*50) + (giaDien_50*50) + (soKw-100) * giaDien_100;
    }else if(150 < soKw && soKw <= 200){
        tienDien = (giaDien*50) + (giaDien_50*50) + (giaDien_100*50) + (soKw-150) * giaDien_150;
    }else if( 200 < soKw){
        tienDien = (giaDien*50) + (giaDien_50*50) + (giaDien_100*50) + (giaDien_150*50) + (soKw - 200) * giaDien_1300;
    }else{
        alert("Hãy nhập lại KW");
    }
    document.getElementById("outM").innerHTML = "Chào " +hoTen+ " Tiền Điện Của Bạn Tháng Này Là: " +tienDien+ " vnđ";
}

// --------------------------------------------------------------

//Gắn Sự Kiện = JS
// onclick
document.getElementById("btnTinhTien").onclick = tienDien;
document.getElementById("btnKetQua").onclick = ketQua;
