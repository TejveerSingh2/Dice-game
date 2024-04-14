var randomnumber2=Math.random();
randomnumber2=Math.floor(1+( randomnumber2*6));

var randomnumber1=Math.random();
randomnumber1=Math.floor(1+( randomnumber1*6));

// alert( randomnumber1);

var a="./images/dice"+randomnumber1+".png";
var b="./images/dice"+randomnumber2+".png";

// alert(a);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").textContent="🚩 Player1 Wins";
}
if(randomnumber1<randomnumber2){
    document.querySelector("h1").textContent="🚩 Player2 Wins";
}
if(randomnumber1===randomnumber2){
    document.querySelector("h1").textContent=" Draw";
}

document.querySelector(".img1").setAttribute("src",a)
document.querySelector(".img2").setAttribute("src",b)
