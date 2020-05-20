const navItems = document.querySelectorAll('.nav-item');
const imgBeerElement = document.querySelectorAll('.beer-corona');
const heroElement = document.querySelectorAll('.hero');

function selectItem(e) {
    removeClass();
    this.classList.add('active');
}

function removeClass() {
    navItems.forEach(item => item.classList.remove('active'));
}

function moveBeerCorona(e) {

}

navItems.forEach(item => item.addEventListener('click', selectItem));

heroElement.addEventListener('mousemove', moveBeerCorona)