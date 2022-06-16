const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

/* Funçao Verificar quantas naves tem mais de 9 passageiros */

function verificar() {
    var ships9 = []
    hitchedSpaceships.forEach((item) => {
        if (item[1] > 9) {
            ships9.push(item[0])
        }
    });

    let index = hitchedSpaceships.findIndex((element) => element[2] != true) + 1;
    let upperCase = hitchedSpaceships.map((element2) => element2[0].toUpperCase())
    alert("\nNaves com mais de 9 tripulantes: " + ships9.join(", ") + "\nEngate pendente: Plataforma " + index + "!" + "\nNomes das naves: " + upperCase.join(", "))
  

};


verificar()