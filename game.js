let parentBtn = document.querySelector('.general-div');
let clickBtn = document.querySelector('.child-div')
let timer;
let time = 20;
let funCounter = 0;
clickBtn.addEventListener('click', () => {
    let btnsize = Math.floor(Math.random() * 80)
    let marginLeft = Math.floor(Math.random() * (600 - btnsize) )
    let marginTop = Math.floor(Math.random() * (500 - btnsize) )
    if (btnsize <= 8) {
        return btnsize + 10;
    }
    clickBtn.style.marginLeft = marginLeft + 'px'
    clickBtn.style.marginTop = marginTop + 'px'
    clickBtn.style.width = btnsize + 'px'
    clickBtn.style.height = btnsize + 'px'
    clickBtn.style.position = 'static'
    parentBtn.style.position = 'static'
    clickBtn.style.transform = 'none'
    funCounter++;
    if (funCounter == 1) {
        timer = setInterval(startTime, 1000)
    } 
    renderScore();
})





async function startTime() {
    time--;
    endTime()
    await renderTime();
}

function endTime() {
    if (time === 0) {
        clearInterval(timer)
        // alert(`Your score is ${funCounter}`)
        let modal = document.querySelector('.modal')
        let dialog = document.querySelector('dialog')
        let p = document.querySelector('p')
        let restartButton = document.querySelector('.restart-button')
        modal.style.display = 'flex'
        dialog.showModal()
        p.innerHTML = `Your score is ${funCounter}`
        restartButton.addEventListener('click', () => {
            window.location.reload()
        })
    }
}

function renderTime() {
    let showTimer = document.querySelector('.time')
    showTimer.style.color = 'white'
    showTimer.innerHTML = 'Time' + ' ' + time 
}   

function renderScore() {
    let showScore = document.querySelector('.score')
    showScore.innerHTML = 'Your Score' + ' ' +  funCounter
}










