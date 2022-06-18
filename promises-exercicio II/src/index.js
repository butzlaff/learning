import Spaceship from './spaceship'
import SpaceshipEngine from "./spaceship_engine"
const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4, 80)
const sophiaEngine = new SpaceshipEngine(sophia)
const amsterdaEngine = new SpaceshipEngine(amsterda)
const dwarfStartEngine = new SpaceshipEngine(dwarfStart)
sophiaEngine.turnOn()
amsterdaEngine.turnOn()
dwarfStartEngine.turnOn()
console.log("Promises")

/*import Spaceship from "./spaceship";

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const estrela_ana = new Spaceship("Estrela-Anã", 20, 4)


const startSpaceship = (nameSpaceship, minToDeport) => {
return new Promise(function(resolve, reject){
    if (minToDeport > 30){
        resolve(nameSpaceship)
    }else{
        reject(`${nameSpaceship} Partida não autorizada: carga atual em ${sophia.toDeport}%`)
    }

}
)
}

startSpaceship(sophia.name, sophia.toDeport).then(nameSpaceship => {
    console.log(`${nameSpaceship} Partida autorizada: carga atual em ${sophia.toDeport}%`)
}).catch(message => {console.log(message)
})

startSpaceship(amsterda.name, amsterda.toDeport).then(nameSpaceship => {
    console.log(`${nameSpaceship} Partida autorizada: carga atual em ${amsterda.toDeport}%`)
}).catch(message => {console.log(message)})

startSpaceship(estrela_ana.name, estrela_ana.toDeport).then(nameSpaceship => {
    console.log(`${nameSpaceship} Partida autorizada: carga atual em ${estrela_ana.toDeport}%`)
}).catch(message => {console.log(message)})



console.log(sophia)
console.log(amsterda)
console.log(estrela_ana)*/