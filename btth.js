let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;

do {
  choice = prompt(
    "QUẢN LÝ THƯ VIỆN \n" +
    "1. Xem danh sách\n" +
    "2. Thêm sách\n" +
    "3. Mượn sách (Xóa)\n" +
    "4. Cập nhật tên sách\n" +
    "5. Sắp xếp A-Z\n" +
    "0. Thoát\n" +
    "Nhập lựa chọn của bạn:"
  );

  if (choice == "1") {
    let result = "=> Danh sách hiện tại (" + books.length + " cuốn):\n";
    for (let i = 0; i < books.length; i++) {
      result += (i + 1) + ". " + books[i] + "\n";
    }
    alert(result);
  } else if (choice == "2") {
    let newBook = prompt("Nhập tên sách mới:");
    books.push(newBook);
    alert("=> Đã thêm thành công!");
  } else if (choice == "3") {
    let borrowBook = prompt("Nhập tên sách muốn mượn:");
    let index = books.indexOf(borrowBook);
    if (index === -1) {
      alert("=> Lỗi: Không tìm thấy sách " + borrowBook + "!");
    } else {
      books.splice(index, 1);
      alert("=> Đã cho mượn cuốn '" + borrowBook + "'.");
    }
  } else if (choice == "4") {
    let oldBook = prompt("Nhập tên sách cần sửa:");
    let index = books.indexOf(oldBook);
    if (index === -1) {
      alert("=> Lỗi: Không tìm thấy sách " + oldBook + "!");
    } else {
      let newName = prompt("Nhập tên mới:");
      books[index] = newName;
      alert("=> Đã cập nhật thành công!");
    }
  } else if (choice == "5") {
    books.sort();
    let result = "=> Danh sách sau khi sắp xếp:\n";
    for (let i = 0; i < books.length; i++) {
      result += (i + 1) + ". " + books[i] + "\n";
    }
    alert(result);
  }
} while (choice != "0");