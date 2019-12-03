// FunBus Logo Hover Effect using Event Listeners: mouseenter & mouseleave
const FunBus = document.querySelector('.logo-heading');
console.log(FunBus);

FunBus.addEventListener('mouseenter', () => {
    FunBus.style.transform = "scale(2)";
    FunBus.style.transition = "transform 0.3s";
})
FunBus.addEventListener("mouseleave", () => {
    FunBus.style.transform = "scale(1)";
})

// click event for nav items
const nav = document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', () => {
        el.style.color = 'red';
    })
})