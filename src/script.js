const btnContactHeader = document.getElementById('btn-contact-header');
const btnContactMain = document.getElementById('btn-contact-main');

const contactSection = document.getElementById('contact');

function scrollToContact() {
  contactSection.scrollIntoView({
    behavior: 'smooth'
  });
}

btnContactHeader.addEventListener('click', scrollToContact);
btnContactMain.addEventListener('click', scrollToContact);  