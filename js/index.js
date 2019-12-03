// created a link tag in <head>
const font = document.createElement('link');
font.href = 'https://fonts.googleapis.com/css?family=Lobster&display=swap';
font.rel = 'stylesheet';

// FunBus Logo Hover Effect using Event Listeners: mouseenter & mouseleave
const FunBus = document.querySelector('.logo-heading');

FunBus.addEventListener('mouseenter', () => {
    FunBus.style.transform = "scale(2)";
    FunBus.style.transition = "transform 0.3s";
})
FunBus.addEventListener("mouseleave", () => {
    FunBus.style.transform = "scale(1)";
})

// click & dblclick events for nav items
const nav = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'red';
        el.style.fontFamily = 'Lobster, cursive';
        el.style.fontSize = '4rem';
        document.querySelector('.nav').style.width = '80%';
    })
    el.addEventListener('dblclick', () => {
        document.querySelector('header').style.backgroundColor = 'aqua';
        el.style.color = 'black';
        el.style.fontFamily = 'Robo';
        el.style.fontSize = '2rem';
    })
})

// drag event for img/fun-bus.jpg
const dragg = document.querySelector('.intro img');

dragg.addEventListener('ondragend', () => {
    window.alert('hi');
})

// keypress event
var count = 0;
const key = document.querySelectorAll('img').forEach(el => {
    count ++;
    if(count %2 === 0){
        window.addEventListener('keypress', () => {       
            el.style.filter = 'blur(10px)';
        })
    }
})

// scroll event
const scroll = document.querySelectorAll('h2').forEach(el => {
    window.addEventListener('scroll', () => {
        el.style.color = 'fuchsia';
    })
})

// resize event
// const resize = document.querySelector('body');
window.addEventListener('resize', () => {
    resize.style.backgroundColor = 'yellow';
})