const menu = document.querySelector('.menu')
const nav = document.querySelector('.nav')

menu.addEventListener('click',(e)=>{
    menu.classList.toggle('fa-times')
    nav.classList.toggle('active')
})

window.addEventListener('scroll',(e)=>{
    menu.classList.remove('fa-times')
    nav.classList.remove('active')
})