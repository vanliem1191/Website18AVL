document.addEventListener("DOMContentLoaded", function () {
    // Sự kiện click cho nút "Tải Danh sách"
    var loadDataButton = document.querySelector("#loadDataButton");
    loadDataButton.addEventListener("click", function () {
        // Sử dụng XMLHttpRequest để đọc tệp JSON
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "students.json", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var jsonString = xhr.responseText;
                var students = JSON.parse(jsonString);

                // Lấy phần tử tbody của bảng
                var studentListContainer = document.getElementById("studentListContainer");

                // Xóa nội dung hiện tại của tbody
                studentListContainer.innerHTML = "";

                // Duyệt qua danh sách sinh viên và thêm vào bảng
                students.forEach(function (student) {
                    var row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${student.name}</td>
                        <td>${student.gender}</td>
                        <td>${student.dob}</td>
                        <td>${student.phone}</td>
                        <td>${student.email}</td>
                        <td>${student.hometown}</td>
                    `;
                    studentListContainer.appendChild(row);
                });
            }
        };
        xhr.send();
    });
});
