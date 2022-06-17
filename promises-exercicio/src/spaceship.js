export default class Spaceship{
    constructor(name, maxGigaJoules, currentGigaJoules){
        this.name = name
        this.maxGigaJoules = maxGigaJoules
        this.currentGigaJoules = currentGigaJoules
        this.toDeport = this.minToDeport().toFixed(2)
        }
        minToDeport = () => {
            return ((this.currentGigaJoules * 100) / this.maxGigaJoules)
    }
}
