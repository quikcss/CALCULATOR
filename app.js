let calcout = document.querySelector(".output")

let calscreen = document.querySelector(".calculator-output")

let buttons = document.querySelectorAll(".input")

let string = ""

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            string = string.toString()
            if(string.length>15){
                document.getElementById("h1").style.fontSize = `${Math.floor(string.length/7)}vw` 
            }
            calcout.textContent = string
        }
        else if(e.target.innerHTML == 'C'){
            string = string.substring(0, string.length - 1);
            calcout.textContent = string
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            calcout.textContent = string
            document.getElementById("h1").style.fontSize = "4vw"
        }
        else if (string.length >= 15) {
            window.alert("Cant enter more than 15 numbers")
        }
        else {
            string += e.target.innerHTML
            calcout.textContent = string
            if (string.length >= 7) {
                document.getElementById("h1").style.fontSize = "40px"
            }
        }
    })
})
