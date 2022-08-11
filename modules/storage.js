import Collection from './collection.js';

const books = new Collection();
export default books;

const dataform = () => {
  localStorage.setItem('data', JSON.stringify(books.bookArray));
};

// function for Local storage retrieval
const retrieveLocalStorage = () => {
  // Local Storage Retrieval
  const mystorage = JSON.parse(localStorage.getItem('data').split(','));
  document.addEventListener('DOMContentLoaded', () => {
    mystorage.forEach((element) => {
      const { title, author } = element;
      books.addBook(title, author);
      books.removeBook();
      books.counter += 1;
    });
  });
};

export { dataform, retrieveLocalStorage };
