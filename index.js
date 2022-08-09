import { Collection } from './modules/collection.js';
import { dataform, retrieveLocalStorage } from './modules/storage.js';
import { createNavigation } from './modules/navigation.js';

const bookTitle = document.getElementById('book-title');
const authorName = document.getElementById('book-author');
const button = document.getElementById('submit');


export const books = new Collection();


//Add Event Listeners to Html Elements

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = bookTitle.value;
  const author = authorName.value;
  books.addBook(book, author);
  books.removeBook();
    // RESET-VALUES
  authorName.value = '';
  bookTitle.value = '';
    // LOCAL-STORAGE
  dataform();
    // COUNTER-TRACKER
  books.counter += 1;
});

createNavigation();
retrieveLocalStorage();