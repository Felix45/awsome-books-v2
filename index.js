import BookStore from './modules/BookStore.js';
import {
  form, menuItems, showSection, displayDate,
} from './modules/EventHandlers.js';

const bookstore = new BookStore();

menuItems.forEach((menuItem) => menuItem.addEventListener('click', showSection));

window.onload = () => { bookstore.displayBooks(); };
setInterval(displayDate, 1000);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookstore.addBook(form.elements.title.value, form.elements.author.value);
  form.reset();
});

