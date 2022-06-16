let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("Informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("Informe a velocidade mãxima da nave (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  "VELOCIDADE MÁXIMA ULTRAPASSADA!" +
                "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
                "\nVelocidade máxima da Nave: " + spaceship.maxVelocity + "km/s")
    }
}

function stop() {
    alert(  "Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: "
            + spaceship.velocity + "\nMáxima da Nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Você deseja:\n1- Acelerar\n2- Parar")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opação inválida")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()
/*
let spaceshipName = prompt('Qual o nome da nave: ')
let spaceshipType = prompt('Qual o tipo da nave: ')
let spaceshipMaxVel = prompt('Qual velocidade máxima desta nave: ')

let spaceship = {
    name: spaceshipName,
    type: spaceshipName,
    maxVelocity: spaceshipMaxVel,
    velocity: 0
}
spaceship.aumentaVelocidade = function(plus) {
    this.velocity += plus
    if (this.velocity > this.maxVelocity){
        this.velocity = this.maxVelocity
    }
}

do {
    menu = prompt('Digite 1 para acelerar \nDigite 2 para parar')
    if (menu == 1){
        let plusVelocity = Number(prompt('Em quanto deseja aumentar a velocidade?'))
        spaceship.aumentaVelocidade(plusVelocity)
    }
}while (menu != 2)


alert('Nome da nave é: ' + spaceshipName + 
'\nTipo da Nave: ' + spaceshipType +
'\nVelocidade máxima: ' + spaceship.maxVelocity +
'\nVelocidade atual: ' + spaceship.velocity )
*/