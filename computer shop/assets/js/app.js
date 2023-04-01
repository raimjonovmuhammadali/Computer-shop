//navbar sticky

window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector('.navbar').classList.toggle('sticky', scrollY > 0)
})

//vaqt js

let day = document.querySelector('.day')
let houres = document.querySelector('.hour')
let minutes = document.querySelector('.minutes')
let seconds = document.querySelector('.second')
setInterval(()=>{
    let newDay = new Date()
    day.innerHTML = newDay.getDate() < 10 ? "0" + newDay.getDate() : newDay.getDate();
    houres.innerHTML = newDay.getHours() < 10 ? "0" + newDay.getHours() : newDay.getHours();
    minutes.innerHTML = newDay.getMinutes() < 10 ? "0" + newDay.getMinutes() : newDay.getMinutes();
    seconds.innerHTML = newDay.getSeconds() < 10 ? "0" + newDay.getSeconds() : newDay.getSeconds();
},1000)

//modal

let showModal = document.querySelectorAll('.showModal')
let modal = document.querySelector('.modal')
let close = document.querySelector('.closeModal')

for(let i = 0; i < showModal.length; i++){
    showModal[i].addEventListener('click', ()=>{
        modal.classList.add('showModall')
    })

    close.onclick = function(){
        modal.classList.remove('showModall')
    }
}

//biografiya

let biografiya = document.querySelectorAll('.biografiya')
let aboutMe = document.querySelectorAll('.aboutMe')
let closeAbout = document.querySelectorAll('.closeAbout')

for(let b = 0; b < biografiya.length; b++){
    biografiya[b].addEventListener('click', (event)=>{
        event.preventDefault()
        for(let a = 0; a < aboutMe.length; a++){
            if(b == a){
                aboutMe[a].classList.add('showAbout')
            }
            for(let c = 0; c < closeAbout.length; c++){
                closeAbout[c].addEventListener('click', ()=>{
                    if(a == c){
                        aboutMe[a].classList.remove('showAbout')
                    }
                })
            }
        }
    })

}

// scrool top

let scrollT = document.querySelector('.fa-angles-up')

window.addEventListener('scroll', ()=>{
    scrollT.classList.toggle('hideIcon', scrollY < 300)
})

scrollT.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})