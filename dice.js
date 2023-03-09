let randomNumber1=Math.floor(Math.random()*6)+1;
let randomImageSrc1="images/"+"dice"+randomNumber1+".png"
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1)

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImageSrc2="images/"+"dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="player 1 wins!";
  
}else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText="player 2 wins!";
} else {
    document.querySelector("h1").innerText="Draw!";
}