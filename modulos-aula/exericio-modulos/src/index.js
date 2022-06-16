const Planet = require('./planet')
const calcular_ua = require("./calcular_ua")

//const solar_system = [["Mercurio", 0.39], ["Venus", 0.72], ["Terra", 1], ["Marte", 1.52], ["Jupiter", 5.2], ["Saturno", 9.53], ["Urano", 19.1], ["Neturno", 30] ]


calcular_ua.planets.push(new Planet("Mercurio", 0.39))
calcular_ua.planets.push(new Planet("Venus", 0.72))
calcular_ua.planets.push(new Planet("Terra", 1))
calcular_ua.planets.push(new Planet("Marte", 1.52))
calcular_ua.planets.push(new Planet("Jupiter", 5.2))
calcular_ua.planets.push(new Planet("Saturno", 9.53))
calcular_ua.planets.push(new Planet("Urano", 19.1))
calcular_ua.planets.push(new Planet("Neturno", 30))

/*
function createPlanets(planet, ua){
   calcular_ua.planets.push(new Planet(planet, ua)) 
}

solar_system.forEach(createPlanets())
*/
console.log(calcular_ua)