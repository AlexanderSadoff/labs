window.onscroll = function() {
    let btn = document.getElementById("arrow");
    if (window.pageYOffset > 10 &&((window.innerWidth === 1366 && window.innerHeight === 768)||(window.innerHeight === 1080 && window.innerWidth === 1920))) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
window.onresize = function() {
    let btn = document.getElementById("arrow");
    if (window.innerWidth < 1366) {
        btn.style.display = "none";
    } else {
        window.onscroll()
    }
}