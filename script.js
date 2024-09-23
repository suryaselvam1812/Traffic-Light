let stopLight = document.getElementById("stopLight")
let readyLight = document.getElementById("readyLight")
let goLight = document.getElementById("goLight")

function turnOnRed() {
    document.getElementById("stopButton").style.backgroundColor = "#cf1124"
    document.getElementById("readyButton").style.backgroundColor = "#4b5069"
    document.getElementById("goButton").style.backgroundColor = "#4b5069"
    stopLight.style.backgroundColor = "#cf1124"
    readyLight.style.backgroundColor = "#4b5069"
    goLight.style.backgroundColor = "#4b5069"
}

function turnOnYellow() {
    document.getElementById("stopButton").style.backgroundColor = "#4b5069"
    document.getElementById("readyButton").style.backgroundColor = "#f7c948"
    document.getElementById("goButton").style.backgroundColor = "#4b5069"
    stopLight.style.backgroundColor = "#4b5069"
    readyLight.style.backgroundColor = "#f7c948"
    goLight.style.backgroundColor = "#4b5069"
}

function turnOnGreen() {
    document.getElementById("stopButton").style.backgroundColor = "#4b5069"
    document.getElementById("readyButton").style.backgroundColor = "#4b5069"
    document.getElementById("goButton").style.backgroundColor = "#199473"
    stopLight.style.backgroundColor = "#4b5069"
    readyLight.style.backgroundColor = "#4b5069"
    goLight.style.backgroundColor = "#199473"
}