function cadastrar(){
    let tipoImovel = document.querySelector("input[name='tipo']:checked").value
    let area = document.querySelector("input[name='area']").value
    let imovelAlugado = document.querySelector("input[name='alugado']:checked").value

    
    let novoImovelClass = new Imovel(tipoImovel, area, imovelAlugado )
    console.log(novoImovelClass)

    let divNova = document.createElement("div")
    divNova.setAttribute("id", "div2")
    document.body.append(divNova)
    let ulNova = document.createElement("ul")  


    let buttonNovo = document.createElement("button")
    buttonNovo.setAttribute("onclick", "()")
    let liNova1 = document.createElement("li")
    divNova.appendChild(ulNova)
    buttonNovo.innerHTML = "Remover"
    let info = "Tipo imóvel: " + tipoImovel + " | Area : " + area + " | Alugado: " +imovelAlugado
    console.log(imovelAlugado)
        if (imovelAlugado == "Alugado"){
            let pElement = document.createElement("span")
            pElement.style.color = "white"
            pElement.style.backgroundColor = "red"
            pElement.innerHTML = "ALUGADO"
            liNova1.appendChild(pElement)
            liNova1.innerHTML += " " + info
        }
    //liNova1.innerHTML =`Tipo imóvel: ${tipoImovel} | Area :${area} | Alugado: ${imovelAlugado}`        
    ulNova.appendChild(liNova1)        
    ulNova.appendChild(buttonNovo)

    buttonNovo.onclick = () => {
        let parent = buttonNovo.parentNode
        parent.remove()
    }

}

