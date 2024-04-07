$(document).ready(function() {
    $('#dangKy').click(function() {
        event.preventDefault();

        // Xoa cac thong bao loi cu
        $('span').remove();
        $('input').removeClass('is-invalid');

        var hoTen = $('#hoTen').val().trim();
        var tenDangNhap = $('#tenDangNhap').val().trim();
        var matKhau = $('#matKhau').val().trim();
        var xnMK = $('#xnMK').val().trim();
        var ngaySinh = $('#ngaySinh').val().trim();
        var dienThoai = $('#dienThoai').val().trim();
        var diaChi = $('#diaChi').val().trim();
        var email = $('#email').val().trim();
        var soThich = $('#selectSoThich').val().trim();

        // Kt dữ liệu
        var isValid = true;

        // Kt cac truong bat buoc nhap
        if(hoTen === '') {
            $('#hoTen').addClass('is-invalid').after('<span class="text-danger">Họ tên không được để trống</span>');
            $('#hoTen').focus();
            isValid = false;
        }

        if(tenDangNhap.length < 6) {
            $('#tenDangNhap').addClass('is-invalid').after('<span class="text-danger">Tên đăng nhập phải lớn hơn 6 ký tự</span>');
            $('#tenDangNhap').focus();
            isValid = false;
        }

        if(matKhau === '') {
            $('#matKhau').addClass('is-invalid').after('<span class="text-danger">Mật khẩu không được để trống</span>');
            $('#matKhau').focus();
            isValid = false;
        }

        if(xnMK === '') {
            $('#xnMK').addClass('is-invalid').after('<span class="text-danger">Xác nhận mật khẩu không được để trống</span>');
            $('#xnMK').focus();
            isValid = false;
        }

        if(matKhau !== xnMK) {
            $('#xnMK').addClass('is-invalid').after('<span class="text-danger">Mật khẩu không trùng khớp</span>');
            $('#xnMK').focus();
            isValid = false;
        }

        if(dienThoai === '') {
            $('#dienThoai').addClass('is-invalid').after('<span class="text-danger">Điện thoại không được để trống</span>');
            $('#dienThoai').focus();
            isValid = false;
        }else {
            // Kiem tra dien thoai co phai la so hay khong
            var regPhone = /^\d+$/;
            if(!regPhone.test(dienThoai)) {
                $('#dienThoai').addClass('is-invalid').after('<span class="text-danger">Điện thoại phải là số</span>');
                $('#dienThoai').focus();
                isValid = false;
            }
        }

        if(email === '') {
            $('#email').addClass('is-invalid').after('<span class="text-danger">Email không được để trống</span>');
            $('#email').focus();
            isValid = false;
        }else {
            // Kiem tra email
            var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if(!regEmail.test(email)) {
                $('#email').addClass('is-invalid').after('<span class="text-danger">Email không hợp lệ</span>');
                $('#email').focus();
                isValid = false;
            }
        }

        // Neu du lieu khong hop le thi dung lai
        if(!isValid) {
            $('#error-message').html('Vui lòng kiểm tra lại các trường dữ liệu');
            return;
        }else {
            sessionStorage.setItem('hoTen', hoTen);
            sessionStorage.setItem('tenDangNhap', tenDangNhap);
            sessionStorage.setItem('matKhau', matKhau);
            sessionStorage.setItem('ngaySinh', ngaySinh);
            sessionStorage.setItem('dienThoai', dienThoai);
            sessionStorage.setItem('diaChi', diaChi);
            sessionStorage.setItem('email', email);
            sessionStorage.setItem('soThich', soThich);
        }

        // Neu du lieu hop le thi hien thi thong bao thanh cong
        setTimeout(function() {
            $('#success-message').html('Đăng ký thành công');
        }, 2000);

        setTimeout(function() {
            window.location.href = '..//html/thongtin.html';
        }, 3000);
    })
})