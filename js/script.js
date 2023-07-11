let modal = document.querySelector(".modal")
let removeBtn = document.querySelector(".remove__btn")
let btnSystem = document.querySelector(".system")
let wrapper = document.querySelector('.wrapper')

let btnPomo = document.querySelector(".pomodoro")
let btnshort = document.querySelector(".short__break")
let btnLong = document.querySelector('.long__break')

////////////// vaqtni beruvchilar   ///////////

let start = document.querySelector(".start")
let pause = document.querySelector(".pause")
let restart = document.querySelector(".restart")

///////  vaqtlarni oluvchi uzgaruvchilar //////

let pomodoro = document.querySelector(".pm")
let shortBreak = document.querySelector(".short")
let longBreak = document.querySelector(".long")

//////////////// sekund va minut  ///////////
let pmMinutes = document.querySelector(".pm #m")
let pmSeconds = document.querySelector(".pm #s")

let shortMinutes = document.querySelector(".short #m")
let shortSeconds = document.querySelector(".short #s")

let longMinutes = document.querySelector(".long #m")
let longSeconds = document.querySelector(".long #s")
///////////////////////////////////////////////

//////////////////////   minut va sekundlarning qiymatlari  /////////////
pmMinutes.innerText = '25'
pmSeconds.innerText = '00'

shortMinutes.innerText = '05'
shortSeconds.innerText = '00'

longMinutes.innerText = "15"
longSeconds.innerText = '00'

let startTime 

start.addEventListener('click', () =>{
    if(startTime===undefined){
      startTime = setInterval(countTime,1000)
      start.style.display = "none"
      pause.style.display = "block"
    }
  
  })
  pause.addEventListener('click',() =>{
    stopInterval()
    startTime = undefined
    start.style.display = "block"
    pause.style.display = "none"
  })

  restart.addEventListener('click', () =>{
    pmMinutes.innerText=25
    pmSeconds.innerText="00"
  
    shortMinutes.innerText=5
    shortSeconds.innerText="00"
  
    longMinutes.innerText=15
    longSeconds.innerText="00"
    stopInterval()
    startTime=undefined
    start.style.display = "block"
    restart.style.display = "none"
  })





function countTime(){
    let counter = 0
    if(pmSeconds.innerText != 0){
      pmSeconds.innerText--
    }else if(pmMinutes.innerText != 0 && pmSeconds.innerText == 0){
      pmSeconds.innerText = 59
      pmMinutes.innerText--
    } else if(pmMinutes.innerText == 0 && pmSeconds.innerText == 0){
        // counter++ bu yerda bir qushmoqda
      btnshort.style.background = "#F87070"

///////////// short break ga utkazish  /////////////////////
      btnPomo.style.background = "none"
      btnshort.style.display = "block"

        pomodoro.style.display = 'none'
        shortBreak.style.display = 'flex'
        // longBreak.style.display = 'none'

      if(shortSeconds.innerText != 0){
        shortSeconds.innerText--
      }else if(shortMinutes.innerText != 0 && shortSeconds.innerText == 0){
        shortSeconds.innerText = 59
        shortMinutes.innerText--
      }
      else if(shortMinutes.innerText == 0 && shortSeconds.innerText == 0){
        // counter++ bu yerda bir qushmoqda

        btnLong.style.background = "#F87070"
        btnshort.style.background = "none"
        btnPomo.style.background = "none"
        btnLong.style.display = "block"

        pomodoro.style.display = 'none'
        shortBreak.style.display = 'none'
        longBreak.style.display = 'flex'
        if(longSeconds.innerText != 0){
          longSeconds.innerText--
        }else if(longMinutes.innerText != 0 && longSeconds.innerText == 0){
          longSeconds.innerText = 59
          longMinutes.innerText--
        }
        else if(longMinutes.innerText == 0 && longSeconds.innerText == 0){
          restart.style.display = "block"
          start.style.display = "none"
          pause.style.display = "none"
        }
      }
    }
    
    console.log(counter);
  }

  function stopInterval(){
    clearInterval(startTime)
  }


  /////////////////////////// modal input  qiymatlarini uzgartirish  ///////////

  let change__pm__value__next = document.querySelector('.change__pm__value .next')
  let change__pm__value__prew = document.querySelector('.change__pm__value .prew')
  let inputPomodoro = document.querySelector('#pomodoro')

  let changeShortValue_next =document.querySelector('.change__short__value .next')
  let changeShortValue_prew =document.querySelector('.change__short__value .prew')
  let inputShortBreak = document.querySelector('#shortBreak')

let changeLongValue_next =document.querySelector('.change__long__value .next')
  let changeLongValue_prew =document.querySelector('.change__long__value .prew')
  let inputLongBreak = document.querySelector('#longBreak')

  let applyBtn = document.querySelector('.apply__btn')
  let pmMinute =inputPomodoro.value
change__pm__value__next.addEventListener('click',()=>{
  pmMinute = inputPomodoro.value++
})
change__pm__value__prew.addEventListener('click',()=>{
  pmMinute=inputPomodoro.value--
})

let shortBr = inputShortBreak.value
changeShortValue_next.addEventListener('click',()=>{
 shortBr =  shortBreak.value++
})
changeShortValue_prew.addEventListener('click',()=>{
  shortBr = shortBreak.value--
})

let longBr = inputLongBreak.value
changeLongValue_next.addEventListener('click',()=>{
 longBr =  longBreak.value++
})
changeLongValue_prew.addEventListener('click',()=>{
 longBr = longBreak.value--
})

applyBtn.addEventListener('click',()=>{
  pmMinutes.innerText = pmMinute
  shortMinutes.innerText = shortBr
  longMinutes.innerText = longBr

  modal.style.display = "none"
  wrapper.style.display = "flex"
})





btnSystem.addEventListener('click', () => {
    wrapper.style.display = "none"
    modal.style.display = "flex"
  })

  removeBtn.addEventListener('click', () => {
    modal.style.display = "none"
    wrapper.style.display = "flex"
  })

  function addZero(num){
    if(num >= 0 && num < 10){
        return `0${num}`
    }else{
        return num
    }
}