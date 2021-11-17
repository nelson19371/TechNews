document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

scrollReveal().reveal('.showcase');
scrollReveal().reveal('.showcase', {delay:500});
scrollReveal().reveal('.showcase',{delay:500});