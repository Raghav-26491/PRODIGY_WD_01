document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
  
    function scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToSection(sections[index].id);
      });
    });
  });
  
    window.addEventListener('scroll', function () {
      var header = document.querySelector('header');
      var scrollPosition = window.scrollY;
      var colors = ['#D3D3D3', '#A9A9A9', '#808080', '#696969', '#2F4F4F', '#000000']; // Shades of black from lightest to darkest
      var colorIndex = Math.floor(scrollPosition / (document.body.scrollHeight / colors.length));
      header.style.backgroundColor = colors[colorIndex];
    });
  