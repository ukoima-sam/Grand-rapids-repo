let pop = document.querySelector('.pop')
let popUp = document.querySelector('.pop-up')
let body = document.querySelector('body')
console.log(popUp);

document.querySelector('.pop').addEventListener('click', (e)=>{
    if(e.target == pop){
        popUp.classList.toggle("d-none")
        popUp.classList.toggle("d-flex")
        pop.classList.toggle('bi-list')
        pop.classList.toggle('bi-x')
 
    }
})
