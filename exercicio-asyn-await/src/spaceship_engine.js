import Spaceship from "./spaceship";

export default class { 
    constructor(spaceship) {
    this.spaceship = spaceship
    }        
        
    async turnOn(){
        try {
        let currentChargeChecking = this.checkCurrentGigaJoules()
        let shieldChecking = this.testShield()
        let results = await Promise.all([currentChargeChecking, shieldChecking])
        this.spaceship.shield = await this.shieldNormalize(results[1])
        console.log(`(${this.spaceship.name}) Partida autorizada: Escudos em (${this.spaceship.shield}) - Carga(${this.spaceship.currentGigaJoules} GJ)}`)
        }
        catch(error) {
            console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
        }
        
    }

    async checkCurrentGigaJoules(){
            let currentGigaJoules = this.toDeport
            if (currentGigaJoules < 30){
                Promise.reject(`Carga em apenas ${currentGigaJoules} GJ`)
            }
            Promise.resolve(currentGigaJoules)
            }

async testShield() {
        let doubleShield = this.spaceship.shield * 2
        if (doubleShield < 100) {
            Promise.reject("Escudo em sobrecarga")
        }
        return(doubleShield)
}

async shieldNormalize(shield){
    console.log(shield)
    let normalizedShield = shield * 0.7
    if (normalizedShield > 120){
        Promise.reject("Escudo em sobrecarga")
    }else{
         return normalizedShield
    }
}
}
