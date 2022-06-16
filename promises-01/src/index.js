let komodoShip = {
    name: "komodo",
    velocity: 80, 
    acceleration: 20
}

const velocityAfter2Seconds = (velocity, acceleration) => {
    new Promise(function(resolve, reject){
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

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration)
console.log("Execução de uma promise")

//change name to index.js to works