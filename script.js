var number1=Math.floor(Math.random()*6)+1;
var path1="images/dice"+number1+".png";
var image1=document.getElementById("img1");
image1.setAttribute("src",path1);


var number2=Math.floor(Math.random()*6)+1;
var path2="images/dice"+number2+".png";
var image2=document.getElementById("img2");
image2.setAttribute("src",path2);

if(number1>number2)
{
    $("h1").innerHTML="Player1 Wins";
}
else if(number2>number1){
    $("h1").innerHTML="Player2 Wins";
}
else{
    $("h1").innerHTML="Draw";
}

