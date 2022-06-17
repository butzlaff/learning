import Spaceship from "./spaceship";

export default class { 
    constructor(spaceship) {
    this.spaceship = spaceship
    }        
        
    turnOn(){
        this.checkCurrentGigaJoules().then(currentGigaJoules => {
        console.log(`${this.spaceship.name} Partida autorizada: carga atual em ${this.spaceship.toDeport}%`)
        }).catch(currentGigaJoules => {
            console.log(`${this.spaceship.name} Partida não autorizada: carga atual em ${this.spaceship.toDeport}%`)
        })
        
    }

    checkCurrentGigaJoules(){
        return new Promise((resolve, reject) => {
            let currentGigaJoules = this.spaceship.toDeport
            if (currentGigaJoules > 30){
                resolve(currentGigaJoules)
            }else   {
                reject(currentGigaJoules)
            }
    })
}
}
