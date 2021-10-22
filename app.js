const btn = document.getElementById('arrowBtn');
const dropDown = document.getElementsByClassName('inner-dropdown');

//btn.addEventListener('click', openContent());

function openContent(){
    dropDown.setAttribute("class", "show");
}