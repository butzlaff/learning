import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false
}
async function adjustPosition(x, y, z) {
    if (z > 90){
        return Promise.reject("Angulo Z invalido para arma")
    }
    laserGun.currentPosition = [x, y, z]
    return[x, y, z]
}

async function fire(x, y, z) {
    laserGun.firing = true
    return[x, y, z]
  }

async function moveAndFire(x, y, z) {
  try {
      let newCoord = await adjustPosition(x, y, z)
      console.log(`Arma ajustada para as coordenadas (${newCoord[0]}, ${newCoord[1]}, ${newCoord[2]})`)
      let fireCoord = await fire(...newCoord)
      console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`) 

    }catch(error){
      console.log(error)
  }
} 

moveAndFire(30, 60, 12)
