import books from '../index.js';

export const dataform = () => {
  localStorage.setItem('data', JSON.stringify(books.bookArray));
};

// function for Local storage retrieval
export const retrieveLocalStorage = () => {
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
