const container = document.querySelector('.container')
const text = document.querySelector('#text')

// calculating time for breathing in, out and hold by defining total time to 7,5 sec
const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = (totalTime / 5)

breathAnimation()

// text appearences to breathing along with the time interval 
function breathAnimation(){
    text.innerHTML ='Breath in'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerHTML = "Hold"

        setTimeout(()=>{
            text.innerHTML ='Breath Out'
            container.className="container shrink"
        },holdTime)
    },breathTime)
}

setInterval(breathAnimation, totalTime)