const titleInputField = document.querySelector("#title");
const authorInputField = document.querySelector("#author");
const isbnInputField = document.querySelector("#isbn");
const bookFormElement = document.querySelector("#book-form");
const selectTbodybooklist = document.getElementById("book-list");
bookFormElement.addEventListener("submit", bookFormSubmitHandler);
const containerDiv = document.querySelector('.container');

function UI() { }

UI.prototype.addBook = function (objectForBook) {
    // <tr>
    //       <td>muzammil</td>
    //       <td>muzammil</td>
    //       <td>muzammil</td>
    //       <td><a href="#" class="delete">X<a></td>
    //     </tr>

    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `<td>${objectForBook.title}</td>
    <td>${objectForBook.author}</td>
    <td>${objectForBook.isbn}</td>
    <td><a href="#" class="delete">Delete<a></td>`;
    selectTbodybooklist.appendChild(tableRow);


    const deleteBtn = document.querySelector('.delete');

    deleteBtn.addEventListener("click", deleteBtnHandler);

    function deleteBtnHandler(event) {
        event.preventDefault();
        // var parent = /
        console.log(event.target.parentElement.parentElement.remove());

    }


}
UI.prototype.resetFields = function () {
    titleInputField.value = "";
    authorInputField.value = "";
    isbnInputField.value = "";
}
UI.prototype.showAlert = function (message = "", className = "success") {
    const createDiv = document.createElement("div");
    createDiv.className = `alert ${className}`;
    createDiv.innerText = message;

    //container div k andar bookform se phle creatediv ko insert kardien
    containerDiv.insertBefore(createDiv, bookFormElement);

    setTimeout(function () {
        createDiv.remove();
    }, 2000);
};

function createObjectForBook(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
function bookFormSubmitHandler(event) {
    event.preventDefault();
    const titleValue = titleInputField.value;
    const authorValue = authorInputField.value;
    const isbnValue = isbnInputField.value;
    const ui = new UI();

    if (!titleValue) {
        ui.showAlert("title is emoty", "error");
        return;
    }
    else if (!authorValue) {
        ui.showAlert("author is emoty", "error");
        return;
    }
    else if (!isbnValue) {
        ui.showAlert("isbn is emoty", "error");
        return;
    }

    // console.log({titleValue,authorValue,isbnValue});
    // const objectForBook = {title:titleValue,author:authorValue,isbn:isbnValue};
    const objectForBook = new createObjectForBook(titleValue, authorValue, isbnValue);
    ui.addBook(objectForBook);
    ui.resetFields();
    ui.showAlert("book is added successfully!!");

}

