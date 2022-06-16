import Planet from './planet'
import { convertUaToKm } from './calcular_ua'


//const solar_system = [["Mercurio", 0.39], ["Venus", 0.72], ["Terra", 1], ["Marte", 1.52], ["Jupiter", 5.2], ["Saturno", 9.53], ["Urano", 19.1], ["Neturno", 30] ]

let planets = [
new Planet("Mercurio", 0.39),
new Planet("Venus", 0.72),
new Planet("Terra", 1),
new Planet("Marte", 1.52),
new Planet("Jupiter", 5.2),
new Planet("Saturno", 9.53),
new Planet("Urano", 19.1),
new Planet("Neturno", 30),
]

planets.forEach(planet => {
   let distantFromSun = convertUaToKm(planet.unity_astonomic).toFixed(2)
   console.log(`${planet.name} - ${planet.unity_astonomic} AU - ${distantFromSun} Km`)
})

