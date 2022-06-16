function setBlueBackground(){
    console.log("setbluebackground")
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

function setTransparentBackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent"

}

function setRedColor(){
    console.log("setredcolor")
    let element = document.getElementById("style-text")
    element.classList.add("red-color")
}

function removeredcolor(){
    console.log("removeredcolor")
    let element = document.getElementById("style-text")
    element.classList.remove("red-color")
}