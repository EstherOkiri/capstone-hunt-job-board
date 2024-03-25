// let navbar = document.querySelector( '.header .logo-section .navbar' );
// document.querySelector('#menuBtn').onclick = () =>{
//     navbar.classList.toggle('.active');
// }
// let dropdownItems = document.querySelectorAll('.job-filter form .dropdown-container .dropdown .lists .items');

// dropdownItems.forEach(items =>{
//     items.addEventListener('click' = () =>{
//         let itemsParent = items.parentElement;
//         let output = itemsParent.querySelector('.output');
//         output.value = items.innerText;
//     });

// });
fetch('https://jobs-api14.p.rapidapi.com/list').then(res => res.json())
.then(data =>{

})

//home page search
const jobs = [];
const searchInput = document.getElementById('searchinput')
//add event listener
searchInput.addEventListener('input',(e)=>{
    const value = e.target.value
    console.log(value)
})
//loop through jobs

