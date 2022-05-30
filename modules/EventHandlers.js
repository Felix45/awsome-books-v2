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
  const currentDate = new Date().toDateString();
  document.getElementById('timer').innerHTML = `${currentDate} ${new Date().toLocaleTimeString('en-US')}`;
};

export {
  form, menuItems, showSection, displayDate,
};
