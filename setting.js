// navbar active links 
var header = document.getElementById("navUlList");
var btns = header.getElementsByClassName("nav__list__item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
        var current = document.getElementsByClassName("active__nav__link");
        current[0].className = current[0].className.replace(" active__nav__link", "");
        this.className += " active__nav__link";
    });
}
// end

// for parlax animation
const paralaxDiv = document.getElementById('headerContentDiv');
let paralaxLeft = document.querySelector('.paralax__left')
let paralaxRight = document.querySelector('.paralax__right')

paralaxDiv.addEventListener('mousemove', e => {
    let halfScreenWidth = window.screen.width / 2;

    let center = (halfScreenWidth - e.clientX) * -1

    let mX = center / window.innerWidth * 360;

    paralaxLeft.style.left = (mX * -1) - 504 + 'px'
    paralaxRight.style.left = (mX * -1) + 504 + 'px'
})

paralaxDiv.addEventListener('mouseout', e => {
    paralaxLeft.style.left = '-504px'
    paralaxRight.style.left = '504px'
})
// end

// navbar sticky

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

console.log(window.pageXOffset, sticky);

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// end