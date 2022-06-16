let timeOutID = setTimeout(() => {
    console.log('Executando depois de 1 segundos')
    clearTimeout(timeOutID)
}, 1000)

let seconds = 0

let timeIntervalID = setInterval(() => {
    console.log('Executando depois de 2 segundos')
    seconds += 2
    if (seconds>10){
    clearInterval(timeIntervalID)
    console.log('Fim do loop SetInternal')
}
}, 2000)