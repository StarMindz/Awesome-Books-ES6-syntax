const listBtn = document.querySelector('#list-btn');
const contactBtn = document.getElementById('contact-btn');
const addBtn = document.getElementById('add-btn');
const texttest = document.getElementById('section-title');
const contact = document.getElementById('contact');
const addForm = document.getElementById('add-book');
const list = document.querySelector('#books');


export const createNavigation = () => {
  listBtn.addEventListener('click', () => {
    list.className = 'display';
    contact.className = 'contact nodisplay';
    addForm.className = 'display-form nodisplay';
    texttest.innerText = 'All awesome books';
  });
  contactBtn.addEventListener('click', () => {
    list.className = 'nodisplay';
    contact.className = 'contact display';
    addForm.className = 'display-form nodisplay';
    texttest.innerText = 'Contact Information';
  });
  addBtn.addEventListener('click', () => {
    list.className = 'nodisplay';
    contact.className = 'contact nodisplay';
    addForm.className = 'display-form display';
    texttest.innerText = 'Add a new book';
  });
}