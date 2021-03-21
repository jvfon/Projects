// to toggle the hamburger icon to show menu shortcuts when the icon is clicked // 

// grab the hamburger id and save it as the 'hamburgerButton'
const hamburgerButton = document.getElementById('hamburger');

const navList = document.getElementById('nav-list');

// a toggle function, grab the navList, classList and toggle the "show" class //
function toggleButton() {
    navList.classList.toggle('show')
}

// attach the function the hamburger button with an event listener //
// if the button is click, the function toggleButton is activated //
hamburgerButton.addEventListener('click', toggleButton);