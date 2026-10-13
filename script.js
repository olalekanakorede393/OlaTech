let menuBtn = document.getElementById("menuBtn");
let menu = document.getElementById("menu");

menuBtn.onclick = function() {
    menu.classList.toggle("show");
};


// SCROLL ANIMATION

let sections = document.querySelectorAll(
    ".about, .services, .projects, .why-us, .team, .testimonials, .contact"
);

sections.forEach(function(section) {
    section.classList.add("animate");
});


window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        let position = section.getBoundingClientRect().top;
        let screenPosition = window.innerHeight - 100;

        if (position < screenPosition) {
            section.classList.add("show");
        }

    });

});
let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};