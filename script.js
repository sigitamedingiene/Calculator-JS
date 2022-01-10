const resultTag = document.querySelector(".result");
const numberButton = document.querySelectorAll(".row button")

let result = 0;

for (let i = 0; i < numberButton.length; i++) {
    const button = numberButton[i];
  
    button.addEventListener("click", ()=>{
        const value = button.innerText;
        resultTag.innerText += value;
    })
}