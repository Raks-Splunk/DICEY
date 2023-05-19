var randomnumber1=Math.floor(Math.random()*6)+1;
var randomnumber2=Math.floor(Math.random()*6)+1;
document.querySelector(".dice1 img").setAttribute("src","images/dice"+randomnumber1+".png");
document.querySelector(".dice2 img").setAttribute("src","images/dice"+randomnumber2+".png");
if(randomnumber1==randomnumber2){
    document.querySelector(".container h1").innerHTML="Draw";
}
else if(randomnumber1>randomnumber2){
    document.querySelector(".container h1").innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector(".container h1").innerHTML="Player 2 Wins!🚩";
}
