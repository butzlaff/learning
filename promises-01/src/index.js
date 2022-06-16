let car = {
    model: "Ferrari SF90", 
    velocity: 0,
    velocityMax: 300,
    acceletarion0to100: 2.5
}

const time0To100 = (velocity, acceletarion0to100) => {
    new Promise((resolve, reject) => {
    let timeTo100km = acceletarion0to100
    let timeMilisseconds = 0
    let intervalId = setInterval(() => {
        console.log(`Velocidade atual é : ${velocity}`)
        do{
        timeMilisseconds += 500
        velocity += 20
        console.log(`Velocidade atual é : ${velocity}`)
        if (timeMilisseconds>timeTo100km){
            clearInterval(intervalId)
        } 
    }while(timeTo100km * 1000 > timeMilisseconds)
    },500)
    
    setTimeout(() => {
    if(velocity == 100){
        console.log(`Aceleração bem sucedidade\nVelocidade atual: ${velocity}`)
        resolve(velocity)
    }else{
    console.log(`Velocidade ${velocity}`)
    reject('Verifique o erro')
    }
    },2500   
    )
}
    )
}

time0To100(car.velocity, car.acceletarion0to100)