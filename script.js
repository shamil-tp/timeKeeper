// import {Temporal} from '@js-temporal/polyfill'

let hourHand = document.getElementById("hour-hand")
let minuteHand = document.getElementById("minute-hand")
let secondHand = document.getElementById("second-hand")

let startClock = ()=>{
    let second = Temporal.Now.plainTimeISO('Asia/Kolkata').second 
    let secondmove = second * 6
    secondHand.style.rotate = `${secondmove}deg`

    let minute = Temporal.Now.plainTimeISO('Asia/Kolkata').minute
    let minutemove = minute * 6
    minuteHand.style.rotate = `${minutemove}deg`

    let hour = Temporal.Now.plainTimeISO('Asia/Kolkata').hour
    let hourmove = hour * 0.5
    hourHand.style.rotate = `${hourmove}deg`
    // console.log(hour,hourmove)
}
setInterval(startClock,1)