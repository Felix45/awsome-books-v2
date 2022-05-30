import { DateTime } from './luxon.js';

const form = document.forms[0];
const menuItems = document.querySelectorAll('.nav-link');
const toggleSections = document.querySelectorAll('.content-area');

const showSection = (element) => {
  menuItems.forEach((menuItem) => { menuItem.classList.remove('active'); });
  element.target.classList.add('active');
  toggleSections.forEach((el) => { el.classList.add('d-none'); });
  document.getElementById(element.target.getAttribute('data-section')).classList.remove('d-none');
};

const displayDate = () => {
  const currentDateTime = DateTime.now();
  document.getElementById('timer').innerHTML = currentDateTime.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

export {
  form, menuItems, showSection, displayDate,
};
