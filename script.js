const submitBtn=document.querySelector('.submit-btn');
const popUp=document.querySelector('.pop-up');
const okBtn=document.querySelector('.ok-btn');

submitBtn.addEventListener('click',()=>{
    popUp.classList.add('open-popup');
})
okBtn.addEventListener('click',()=>{
    popUp.classList.remove('open-popup');
})