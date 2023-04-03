// alert("hello");
// function nextSequense(){
//     var i=(Math.floor(Math.random()*10) )%4;
//     console.log(i);
// } 
var gamePattern=[]
var randomChosenColour;
buttonColours=["red", "blue", "green", "yellow"]
var j=0
var started=false
var equalflg=true
document.addEventListener('keypress',function nextSequense(){

    if(!started){
        level=0
        $("#level-title").text("Level "+level )
    }
    started=true
        var i=(Math.floor(Math.random()*10) )%4;
        console.log(buttonColours[i]);    
        randomChosenColour=buttonColours[i]
        gamePattern.push(randomChosenColour)
        $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
        playSound(randomChosenColour);
        level++;
    console.log(gamePattern)
    

});
var userClickedPattern=[]
var userChosenColour;
    $('.btn').click(function(){
        this.userChosenColour
        userChosenColour=jQuery(this).attr('id')
        userClickedPattern.push(userChosenColour)
        console.log(userClickedPattern)
        $("#" + userChosenColour).fadeOut(100).fadeIn(100);
        animatePress(userChosenColour);

playSound(userChosenColour);
checkanswer(userClickedPattern.length)
    })
function playSound(name){
    var tom1=new Audio('./sounds/'+name+'.mp3');
    tom1.play();

}
function animatePress(userChosenColour){
    $("#" + userChosenColour).addClass("pressed").delay(100).removeClass("pressed")
}
function checkanswer(currentLevel){
for(var k=0;k<currentLevel;k++){
    if(userClickedPattern[k]!=gamePattern[k]){

        equalflg=false
        console.log("failure")
        $("body").addClass("game-over").delay(100).removeClass("game-over");
        $('h1').text('Game Over, Press Any Key to Restart')
        playSound("wrong")
        j=0
        started=false
        return
    }
}
if(equalflg==true)
    {
        console.log("success")

        return

    }
}
function startover(){
    level=0
    started=false
    gamePattern=[]
}