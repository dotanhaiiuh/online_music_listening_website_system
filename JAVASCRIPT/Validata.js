// JavaScript source code
$(document).ready(function () {
    function kiemtrahoten() {
        var ten = $("#txtHoTen").val().trim();//text
        var reg = /[a-zA-Z]+/;
        if (ten != "") {
            if (reg.test(ten) == false) {
                $("#erTen").html("(*) Tên phải là chuỗi");
                return false;
            }
            else {
                $("#erTen").html("(*)");
                return true;
            }
        }
        else {
            $("#erTen").html("(*)Tên không được để trống");
            return false;
        }
    }

    $("#txtHoTen").blur(function () {
        kiemtrahoten();
    });

    function kiemtrans() {
        var ns = $("#txtNgaySinh").val();//text
        ns = new Date(ns);
        var cur = new Date();
        var t = cur.getFullYear() - ns.getFullYear();
        if (t < 16) {
            $("#erNS").html("(*) Tuổi phải trên 16");
            return false;
        }
        else {
            $("#erNS").html("(*)");
            return true;
        }
    }

    $("#txtNgaySinh").blur(function () {
        kiemtrans();
    });

    function kiemtrasdt() {
        var sdt = $("#txtSDT").val().trim();//text
        var reg = /^[0-9]{9,11}$/;
        if (sdt != "") {
            if (reg.test(sdt) == false) {
                $("#erSDT").html("(*) Số điện thoại phải từ 9 đến 11 số");
                return false;
            }
            else {
                $("#erSDT").html("(*)");
                return true;
            }
        }
        else {
            $("#erSDT").html("(*) Số điện thoại không được rỗng");
            return false;
        }
    }

    $("#txtSDT").blur(function () {
        kiemtrasdt();
    });

    function kiemtradiachi() {
        var dc = $("#txtDiaChi").val().trim();//text
        if (dc != "") {
            $("#erDC").html("(*)");
            return true;
        }
        else {
            $("#erDC").html("(*) Địa chỉ không được rỗng");
            return false;
        }
    }

    $("#txtDiaChi").blur(function () {
        kiemtradiachi();
    });

    function kiemtramail() {
        var mail = $("#emailDK").val().trim();//text
        var reg = /^\w+@(gmail|yahoo|hotmail)(\.com)(\.vn)*/;
        if (mail != "") {
            if (reg.test(mail) == false) {
                $("#erEmail").html("(*) Email phải hợp lệ theo chuẩn (gmail, yahoo, hotmail)");
                return false;
            }
            else {
                $("#erEmail").html("(*)");
                return true;
            }
        }
        else {
            $("#erEmail").html("(*) Email không được rỗng");
            return false;
        }
    }

    $("#emailDK").blur(function () {
        kiemtramail();
    });

    function kiemtramatkhau() {
        var pwd = $("#pwdDK").val().trim();//text
        if (pwd != "") {
            $("#erpwd").html("(*)");
            return true;
        }
        else {
            $("#erpwd").html("(*) Mật khẩu không được rỗng");
            return false;
        }
    }

    $("#pwdDK").blur(function () {
        kiemtramatkhau();
    });

    function kiemtrakhopmatkhau() {
        var pwd = $("#pwdDK").val().trim();//text
        var cfpwd = $("#cfpwdDK").val().trim();//text
        if (pwd != cfpwd) {
            $("#ercfpwd").html("(*) Mật khẩu và mật khẩu xác nhận phải khớp nhau");
            return false;
        }
        else {
            $("#ercfpwd").html("(*)");
            return true;
        }
    }

    $("#cfpwdDK").blur(function () {
        kiemtrakhopmatkhau();
    });

    function kiemtrahinh() {
        var hinh = $("#txtanh").val().trim();//text

        var reg = /^.+\.(jpg|png|gif)$/;
        if (hinh != "") {
            if (reg.test(hinh) == false) {
                $("#erAnh").html("(*) Định dạng hình chỉ hỗ trợ (.jpg, .png, .gif)");
                return false;
            }
            else {
                $("#erAnh").html("(*)");
                return true;
            }
        }
        else {
            $("#erAnh").html("(*) Vui lòng chọn một ảnh đại diện");
            return false;
        }
    }

    $("#txtanh").blur(function () {
        kiemtrahinh();
    });

    $("#btnDK").click(function () {
        if (kiemtrahoten() && kiemtrans() && kiemtrasdt() && kiemtradiachi() && kiemtramail() && kiemtramatkhau() && kiemtrakhopmatkhau() && kiemtrahinh()) {
            alert("Đăng ký thành công");
            $("#btnDK").attr("data-dismiss", "modal");
        }
    });
});