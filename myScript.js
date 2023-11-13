let answer = "";
let button = document.querySelectorAll('.button')
Array.from(button).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            answer = eval(answer)
            document.querySelector("input").value = answer
            
        }
         else if (e.target.innerHTML === "C") {
            answer = "";
            document.querySelector("input").value = answer
        }else if (e.target.innerHTML === "Sq") {
            answer = answer**2;
            document.querySelector("input").value = answer
        }else if (e.target.innerHTML === "Rt") {
            answer = answer**0.5;
            document.querySelector("input").value = answer
        }
        else {
            answer = answer + e.target.innerHTML
            document.querySelector("input").value = answer
        }
    })
})
