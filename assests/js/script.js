// JS FOR ANIMATION SCROOLING START
function creative() {
    var creatives = document.querySelectorAll(".creative");
    for (var i = 0; i < creatives.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = creatives[i].getBoundingClientRect().top;
        var elementVisible = 180;

        if (elementTop < windowHeight - elementVisible) {
            creatives[i].classList.add("active");
        } else {
            creatives[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", creative);
// JS FOR ANIMATION SCROOLING END

// FUNCTION FOR SHOWING ITEMS ONE BY ONE USING HEADER NAV START
var items = document.getElementsByClassName("fadeitem");
for (let i = 0; i < items.length; ++i) {
    fadeIn(items[i], i * 1000)
}
function fadeIn(item, delay) {
    setTimeout(() => {
        item.classList.add('fadein')
    }, delay)
}
$(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
        $('#dynamic').addClass('fade-item');
    } else {
        $('#dynamic').removeClass('newClass');
    }
});
// FUNCTION FOR SHOWING ITEMS ONE BY ONE USING HEADER NAV END






