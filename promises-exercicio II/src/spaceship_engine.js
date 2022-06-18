import Spaceship from "./spaceship";

export default class { 
    constructor(spaceship) {
    this.spaceship = spaceship
    }        
        
    turnOn(){
        let currentChargeChecking = this.checkCurrentGigaJoules()
        let shieldChecking = this.testShield()
        Promise.all([currentChargeChecking, shieldChecking]).then(results =>{
            return this.shieldNormalize(results[1])
        }).then(newShield => {
            this.spaceship.shield = newShield
            console.log(`(${this.spaceship.name}) Partida autorizada: Escudos em (${this.spaceship.shield}) - Carga(${this.spaceship.currentGigaJoules} GJ)}`)
        }).catch(error => {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        })
        
    }

    checkCurrentGigaJoules(){
        return new Promise((resolve, reject) => {
            let currentGigaJoules = this.spaceship.toDeport
            if (currentGigaJoules > 30){
                resolve(currentGigaJoules)
            }else   {
                reject(`Carga em apenas ${currentGigaJoules} GJ`)
            }
    })
}

testShield() {
    return new Promise((resolve, reject) => {
        let doubleShield = this.spaceship.shield * 2
        if (doubleShield >= 100) {
            resolve(doubleShield)
        }else{
            reject("Escudo em sobrecarga")
        }
    })
}

shieldNormalize(shield){
    return new Promise((resolve, reject) => {
    let normalizedShield = shield * 0.7
    if (normalizedShield > 120)   {
        reject("Escudo em sobrecarga")
    }else{
        resolve(normalizedShield)
    }
})
}

}
