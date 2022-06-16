function createHouse(){

    let city = document.getElementById("city")
    let bairro = document.getElementById("bairro")
    let area = document.getElementById("area")
    let numero = document.getElementById("numero")

    let divNova = document.createElement("div")
    divNova.setAttribute("id", "div2")
    document.body.append(divNova)
    let ulNova = document.createElement("ul")  
    let buttonNovo = document.createElement("button")
    buttonNovo.setAttribute("onclick", "()")
    let liNova1 = document.createElement("li")
    let liNova2 = document.createElement("li")
    let liNova3 = document.createElement("li")
    let liNova4 = document.createElement("li")
    divNova.appendChild(ulNova)
    buttonNovo.innerHTML = "Remover"
    ulNova.appendChild(liNova1)
    liNova1.innerHTML =`Cidade: ${city.value}`
    ulNova.appendChild(liNova2)
    liNova2.innerHTML = `Bairro :${bairro.value}`
    ulNova.appendChild(liNova3)
    liNova3.innerHTML = `Area: ${area.value}`
    ulNova.appendChild(liNova4)
    liNova4.innerHTML = `Numero: ${numero.value}`
    ulNova.appendChild(buttonNovo)

    buttonNovo.onclick = () => {
        let parent = buttonNovo.parentNode
        parent.remove()
    }
}