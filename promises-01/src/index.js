let komodoShip = {
    name: "komodo",
    velocity: 80, 
    acceleration: 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
   return new Promise(function(resolve, reject){
        setTimeout(()=> {
            if (acceleration > 0){
                velocity += acceleration * 2
                console.log(`Nova velocidade ${velocity}`)
                resolve(velocity)
            }else{
                console.log("Aceleração inválida")
                reject("Não possui aceleração")
            }}, 1000)
        })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
        komodoShip.velocity = velocity
        console.log("Depois de acelerar \n", komodoShip)
    }).catch(message => {
        console.log(`Komodo ${message}`)
    })


console.log("Execução de uma promise")
console.log(komodoShip)
//change name to index.js to works