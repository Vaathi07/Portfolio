//toggle icon navbar
Let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = top + sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //acrive navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[ href* =' + id +']').classList.add('active');
            });
           // active sections for animation on scroll 
           sec.classList.add('show-animate');
           
        } 
        else {
            sec.classList.remove('show-animate');
        }
    });
    //sticky header 
    Let header = document.querySelector('header');

    header.classLisr.toggle('sticky' window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
     menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}