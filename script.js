let paragraph = document.getElementById("he")

function play(letter){
    let Qse = document.getElementById(letter)
    Qse.play()
    if(letter == "Q" || letter === "q"){
        paragraph.innerHTML = "Heater-1"
    }else if(letter == "w" || letter === "W") {
        paragraph.innerHTML = "Heater-2"
    }else if(letter === "e" || letter === "E"){
        paragraph.innerHTML = "Heater-3"
    }else if(letter === "a" || letter === "A"){
        paragraph.innerHTML = "Heater-4"
    }else if(letter === "s" || letter === "S"){
        paragraph.innerHTML = "Clap"
    }else if(letter === "d" || letter === "D"){
        paragraph.innerHTML = "Open-HH"
    }else if(letter === "z" || letter === "Z"){
        paragraph.innerHTML = "Kick-n'-Hat"
    }else if(letter === "x" || letter === "X"){
        paragraph.innerHTML = "Kick"
    }else if(letter === "c" || letter === "C"){
        paragraph.innerHTML = "Closed-HH"
    }
 
}

window.document.onkeyup = function(e) {
    /*
    color function is we use for change color when we click keywords
    */

    function color(colValue){
        let button = document.getElementById(colValue)
        button.focus()
    }

    if(e.keyCode === 81){
        play("Q")
        paragraph.innerHTML = "Heater-1"
        color("Heater-1")
    }else if(e.keyCode === 87){
        play("W")
        paragraph.innerHTML = "Heater-2"
        color("Heater-2")
    }else if(e.keyCode === 69){
        play("E")
        paragraph.innerHTML = "Heater-3"
        color("Heater-3")
    }else if(e.keyCode === 65){
        play("A")
        paragraph.innerHTML = "Heater-4"
        color("Heater-4")
    }else if(e.keyCode === 83){
        play("S")
        paragraph.innerHTML = "Clap"
        color("Clap")
    }else if(e.keyCode === 68){
        play("D")
        paragraph.innerHTML = "Open-HH"
        color("Open-HH")
    }else if(e.keyCode === 90){
        play("Z")
        paragraph.innerHTML = "Kick-n'-Hat"
        color("Kick-n'-Hat")
    }else if(e.keyCode === 88){
        play("X")
        paragraph.innerHTML = "Kick"
        color("Kick")
    }else if(e.keyCode === 67){
        play("C")
        paragraph.innerHTML = "Closed-HH"
        color("Closed-HH")
    }
}