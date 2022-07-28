document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");
  form.addEventListener('submit', handleForm);

  const deleteAllButton = document.createElement('button');
  deleteAllButton.addEventListener('click', handleDeleteAll);
  deleteAllButton.textContent = "Delete"
  const body = document.querySelector("body")
  body.appendChild(deleteAllButton);

});

const handleForm = function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const newBook = document.createElement('ul');
  newBook.classList.add("book")

  const newTitle = document.createElement('li');
  newTitle.textContent = title;
  const newAuthor = document.createElement('li');
  newAuthor.textContent = author;
  const newCategory = document.createElement('li');
  newCategory.textContent = category;

  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthor);
  newBook.appendChild(newCategory);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(newBook);
  const form = document.querySelector("#new-item-form");
  form.reset();

};

const handleDeleteAll = function () {

  const readingList = document.querySelector('#reading-list');
  const books = document.querySelectorAll('.book');
  for (const book of books) {
    readingList.removeChild(book);
  };
  
};