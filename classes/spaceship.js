class Spaceship {
      static get DECELERATION_RATE() {
        return 0.17
      }
      constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentVelocity = 0
      }
      speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - Spaceship.DECELERATION_RATE)
      }
    }
    
/*

function createNewSpaceship(){
    let spaceshipName = prompt('Qual o nome da nave: ')
    let crewQuantity = Number(prompt('Quantidade de tripulantes da nave: '))
    return [spaceshipName, crewQuantity]
}
function showTypeSpaceship(){
    let chosenOption 
    while (chosenOption !=1 && chosenOption !=2) {
       chosenOption = Number(prompt('Qual o tipo da nave? ' +
    '\nDigite 1 para Batalha '+
    '\nDigite 2 para Transporte'))
    }
    return chosenOption
}
let createSpaceship = []
createSpaceship = createNewSpaceship()
let typeOfSpaceship = showTypeSpaceship()

alert(createSpaceship)


if (typeOfSpaceship == 1){
    let weapons = prompt('Quantidade de Armas disponíveis: ')
    newSpaceship = new BattleSpaceship(weapons, createSpaceship[0], createSpaceship[1])
    alert(newSpaceship)

}else{
    let slots = prompt('Quantidade de Vagas disponíveis: ')
    newSpaceship = new TranspSpaceship(slots, createSpaceship[0], createSpaceship[1])
    alert(+ newSpaceship)
}

alert(TranspSpaceship)

function acelerar(){
    let velocity 
    velocity = prompt('Qual o valor que deseja acelerar a nave?')
}

function impmirSpaceships(){

}

function switchSpaceship(){

}

let chosenOption

while(chosenOption ){
    chosenOption = prompt('O que deseja fazer: \n1- Acelerar nave\n2- Trocar Nave\n3- Imprimir e sair')
    switch(chosenOption){
        case 1: acelerar()
        break
        case 2: switchSpaceship()
        break
        case 3: impmirSpaceships()
        break
    }    
}*/