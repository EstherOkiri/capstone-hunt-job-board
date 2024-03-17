let navbar = document.querySelector( '.header .logo-section .navbar' );
document.querySelector('#menuBtn').onclick = () =>{
    navbar.classList.toggle('.active');
}
let dropdownItems = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .lists .items');

dropdownItems.forEach(items =>{
    items.addEventListener('click' = () =>{
        let itemsParent = items.parentElement;
        let output = itemsParent.querySelector('.output');
        output.value = items.innerText;
    });

});