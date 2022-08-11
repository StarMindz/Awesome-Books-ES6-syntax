// Class for creating Book collection
const list = document.querySelector('#books');

class Collection {
  constructor() {
    this.bookArray = [];
    this.counter = 0;
    this.delcounter = 0;
  }

  addBook(book, author) {
    const bookObject = {};
    bookObject.id = this.counter;
    bookObject.title = book;
    bookObject.author = author;
    this.bookArray.push(bookObject);
    this.display(book, author);
  }

  display(book, author) {
    const li = document.createElement('li');
    const removebtn = document.createElement('button');
    li.setAttribute('id', `${this.counter}`);
    li.className = 'lists';
    li.textContent = `${book} by ${author}`;
    // REMOVE BUTTON
    removebtn.className = 'removebuttons';
    removebtn.textContent = 'Remove';
    li.appendChild(removebtn);
    list.appendChild(li);
  }

  removeBook() {
    const buttons = document.querySelectorAll('.removebuttons');
    buttons[buttons.length - 1].addEventListener('click', (e) => {
      e.preventDefault();
      const elid = e.target.parentNode.id;
      const remotion = e.target.parentNode;
      const localcount = elid - this.delcounter;
      list.removeChild(remotion);
      this.bookArray.splice(localcount, 1);
      this.delcounter += 1;
      this.dataLog();
    });
  }

  dataLog() {
    localStorage.setItem('data', JSON.stringify(this.bookArray));
  }
}

export default Collection;