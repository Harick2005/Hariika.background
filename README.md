# Clear Morning - Custom New Tab

Một tiện ích mở rộng (Extension) tùy chỉnh trang Tab mới (New Tab) cho Chrome/Edge với giao diện tối giản, tích hợp thanh tìm kiếm nhanh và hình nền video động. 

## ✨ Tính năng chính
- Tích hợp video nền động (Anime, phong cảnh...).
- Đề xuất từ khóa khi tìm kiếm.
- Lệnh tắt (Shortcuts) để truy cập nhanh các trang web.
- Hiển thị thời tiết, dự báo mưa và nhiệt độ trời.

---

## 🛠 Hướng dẫn cài đặt (Chrome / Edge)
Vì đây là tiện ích chưa đưa lên Cửa hàng Chrome, bạn cần cài đặt qua chế độ dành cho Nhà phát triển:

1. Tải toàn bộ mã nguồn của kho lưu trữ này về máy (hoặc dùng lệnh `git clone`).
2. Mở trang quản lý Tiện ích mở rộng trên trình duyệt:
   - **Chrome:** Gõ `chrome://extensions` vào thanh địa chỉ.
   - **Edge:** Gõ `edge://extensions` vào thanh địa chỉ.
3. Bật **Chế độ dành cho nhà phát triển (Developer mode)** ở góc phải màn hình.
4. Bấm vào nút **Tải tiện ích đã giải nén (Load unpacked)**.
5. Chọn thư mục gốc của dự án này (thư mục có chứa file `manifest.json`).

---

## 🔍 Hướng dẫn sử dụng Thanh tìm kiếm
Để sử dụng thanh tìm kiếm trên trang New Tab, hãy **nhấn phím TAB** hoặc tải lại trang một lần. Mặc định hệ thống sẽ tìm kiếm bằng Google. Bạn có thể gõ các lệnh tắt dưới đây để chuyển hướng nhanh:

**Cú pháp:** `<lệnh> <từ khóa>`
*(Ví dụ: `yt blue archive` sẽ tự động tìm kiếm cụm từ "blue archive" trên YouTube)*

### Các lệnh hỗ trợ (Commands):
- `yt` - Tìm kiếm trên YouTube.
- `gh` - Mở trực tiếp một đường dẫn GitHub.
- `ask` - Tìm kiếm trên Perplexity AI.
- `gpt` - Mở cuộc trò chuyện mới trên ChatGPT.
- `cl` - Mở cuộc trò chuyện mới trên Claude.
- -`gmn` - Mở cuộc trò chuyện mới trên Gemini.
- `<số>` - Mở một tab đã ghim theo số thứ tự.
### Phím tắt nhanh (Shortcuts):
Giống như Commands nhưng không cần dấu cách.
- `:` - Truy cập `http://localhost:<cổng>` (Ví dụ: `:8000`).

---

## 🎨 Hướng dẫn thay đổi Video Nền
Bạn có thể tự do thay thế video nền thành video yêu thích của mình:
1. Chuẩn bị một video định dạng `.mp4`.
2. Đổi tên video đó và chép đè vào thư mục `source/assets/` (hoặc sửa đường dẫn thẻ `<video>` bên trong file `source/index.html`).
3. Mở tab mới để xem thành quả!
