// alert("Hello World")

var color;
function nextSequense(){
    var randomNumber=Math.round(Math.random()*10)%4
    console.log(randomNumber) 
    buttonColors=['red','blue','green','yellow']
    console.log(buttonColors[randomNumber])
}
$(document).click(function(){
    nextSequense();

})
