const refreshButton = document.querySelector('.refresh-button'); //game refresh button algorithm
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)

//the winning button selection algorithm

const buttonNumber = document.querySelector('.btn');
let number;
function numberButton() {
  let winningButton;
  const onClick = function() {
    winningButton = winningButton ? winningButton : Math.floor(Math.random() * number);
    if (winningButton == this.id) {
      document.getElementById("display").innerHTML ="Congratulations! You've guessed the button!"
    } else {
      alert("Sorry, wrong button!")
    }
  }
    number = document.getElementById("boxNumber").value;
    for (let i = 1; i <= number; ++i) {
      const buton = document.createElement("button")
      document.querySelector('div').appendChild(buton)
      buton
      buton.id = i;
      buton.innerText = " >> " + i + " << ";
      buton.addEventListener("click", onClick);
    }
}



// let value = generateRandomInteger(3);
// let result1 = null;
// let result2 = null;
// let result3 = null;
// if (value === 3) {
//   result1 = "congratulations";
// } else if (value === 2) {
//   result2 = "congratulations";
// } else {
//   result3 = "congratulations";
// }
// function premium_1() {
//   document.getElementById("display").innerHTML = result1;
// }
// function premium_2() {
//   document.getElementById("display").innerHTML = result2;
// }
// function premium_3(){
//   document.getElementById("display").innerHTML = result3;
// }

