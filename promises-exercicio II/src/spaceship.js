export default class Spaceship{
    constructor(name, maxGigaJoules, currentGigaJoules, shield){
        this.name = name
        this.maxGigaJoules = maxGigaJoules
        this.currentGigaJoules = currentGigaJoules
        this.shield = shield
        this.toDeport = this.minToDeport().toFixed(2)
        }
        minToDeport = () => {
            return ((this.currentGigaJoules * 100) / this.maxGigaJoules)
    }
}
