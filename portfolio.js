// Toggle the navbar
function toggleMenu(){
    const menu=document.querySelector(".moblie-nav-menubar");
    const icon=document.querySelector(".hambauger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}
// Dark mode 
document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    const body = document.body;
    const moonIcon = document.getElementById('moon');
    const sunIcon = document.getElementById('sun');

    // Check if dark mode is saved in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark');
        sunIcon.style.opacity = '1';
        moonIcon.style.opacity = '0';
    }

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDarkMode = body.classList.contains('dark');

        if (isDarkMode) {
            sunIcon.style.opacity = '1';
            moonIcon.style.opacity = '0';
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            sunIcon.style.opacity = '0';
            moonIcon.style.opacity = '1';
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
}); 
// typing effect
var typingEffect = new Typed(".typedText", {
    strings: ["Tejaswini Putti", ], 
    loop: true,
    typeSpeed: 100, 
    backSpeed: 80, 
    backDelay: 2000
});


  
  var typingEffect = new Typed(".typing", {
    strings: ["I'm skilled with various programming languages and technologies and have a strong foundation in computer science concepts. My knowledge of technology allows me to take on challenging issues and come up with creative solutions. An comprehensive overview of my technical knowledge may be found below:" ], 
    loop: true,
    typeSpeed: 10, 
    backSpeed: 80, 
    backDelay: 2000
});
// In skills bar percentage 

document.addEventListener('DOMContentLoaded', function() {
    // Select all progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const percentage = bar.parentElement.previousElementSibling.querySelector('.val').innerText;
        bar.style.width = percentage;
    });
});

// In navbar adding active-list  class 
document.addEventListener('DOMContentLoaded', function() {
    // Select all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        // Prevent default behavior of anchor links
        event.preventDefault();
        navLinks.forEach(link => link.classList.remove('active-link'));
        this.classList.add('active-link');
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }); 
// Adding active-link class by scrolling 

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  const pageYOffset = window.pageYOffset;
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});


  