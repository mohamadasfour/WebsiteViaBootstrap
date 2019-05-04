//   scroll();
window.onscroll = () => {
    const yPos = window.pageYOffset;
    const socialContainer = document.getElementById('social-container');
    (yPos > 300) ? socialContainer.classList.add('shown') : socialContainer.classList.remove('shown');
  }
  onscroll();
