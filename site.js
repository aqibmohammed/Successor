const togglebutton=document.getElementsByClassName('.span1')
const togglebtnicon=document.querySelector('.fa-solid fa-circle-chevron-up')
const navbarlinks=document.querySelector('.navbarlinks')
togglebutton.onclick=function(){
    navbarlinks.classList.toggle('open')
    const isOPen=navbarlinks.classList.contains('open')
    togglebtnicon.classList=isOPen ?'fa-solid fa-circle-chevron-down' : 'fa-solid fa-circle-chevron-up'
}
// const tgbutton=document.getElementsByClassName("Span1")[0]
// const navbarlinks=document.getElementsByClassName("navbar-links")[0]
// tgbutton.addEventListener('click', () =>{
//     navbarlinks.classList.toggle('active')
// })