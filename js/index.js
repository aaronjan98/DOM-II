// Your code goes here
const FunBus = document.querySelector('.logo-heading');
console.log(FunBus);

FunBus.addEventListener('mouseenter', () => {
    FunBus.style.transform = "scale(2)";
    FunBus.style.transition = "transform 0.3s"
})
FunBus.addEventListener("mouseleave", () => {
    FunBus.style.transform = "scale(1)"
})