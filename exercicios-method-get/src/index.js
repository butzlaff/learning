import "core-js"
import { async } from "regenerator-runtime"
import "regenerator-runtime/runtime"
import Neo from "./neo"
import { getNeos } from "./neo_service"

async function loadNeos() {
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo => {
        const newNeo = new Neo(neo["sentryId"], neo["fullname"], neo["year_range_min"], neo["year_range_max"])
        neos.push(newNeo)
    })
   // renderNeo(neos)
    renderNeoOl(neos)
}

/*
function renderNeo(neos){
    const ulElement = document.getElementById("neos-list")
    neos.forEach(neo =>{
        const liElement = document.createElement("li")
        const text = `ID: ${neo.sentryId} | Name: ${neo.fullName} | Ano minímo: ${neo.minYears} | Ano maximo: ${neo.maxYears}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}
*/
function renderNeoOl(neos){
    const olElement = document.getElementById("neos-list-ol")
    neos.forEach(neo =>{
        const liElement = document.createElement("li")
        const text = `(${neo.sentryId}) ${neo.fullName}: risco de colisão entre ${neo.minYears} e ${neo.maxYears}`
        liElement.innerHTML = text
        olElement.appendChild(liElement)
    })
}


loadNeos()