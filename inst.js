const refreshButton = document.querySelector('.refresh-button'); //game refresh button algorithm
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener('click', refreshPage)
//the winning button selection algorithm
const buttonNumber = document.querySelector('.btn');
function numberButton() {
  const onClick = function() {
    let winningButton = generateNumber(number)
    if (winningButton == this.id) {
      document.getElementById("display").innerHTML ="Congratulations! You've guessed the button!"
    } else {
      alert("Sorry, wrong button!")
    }
  }
  let number = document.getElementById("boxNumber").value;
  for (let i = 1; i <= number; ++i) {
    const buton = document.createElement("button")
    document.querySelector('div1').appendChild(buton)
    buton.style.backgroundColor = '#25d67e';
    buton.style.borderRadius = '10px';
    buton.style.height = '30px';
    buton.style.padding = '3px 13px';
    buton.style.fontSize = '20px';
    buton.style.marginRight = '8px';
    buton.id = i;
    buton.innerText = i;
    buton.addEventListener("click", onClick);
  }
}
function generateNumber(number){
  let n = Math.floor(Math.random() * number); 
  if (n == number) {
    return --n;
  }
  return n;
}


