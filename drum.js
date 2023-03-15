// document.querySelector('button').addEventListener('click',function(){
//     alert('I got clicked');
// })
var a=["w drum","a drum","s drum","d drum","j drum","k drum","l drum"]
for(var i=0;i<7;i++){
document.querySelectorAll('button')[i].addEventListener('click',function(){
this.style.color = "white";
var key=this.innerHTML;
switch (key) {
    case 'w':
        var tom1=new Audio('tom-1.mp3');
        tom1.play();

        break;
    case 'a':
        var tom2=new Audio('tom-2.mp3');
        tom2.play();

        break;
    case 's':
        var tom3=new Audio('tom-3.mp3');
        tom3.play();

        break;
    case 'd':
        var tom4=new Audio('tom-4.mp3');
        tom4.play();

        break;    
    case 'j':
        var crash=new Audio('crash.mp3');
        crash.play();

        break;
    case 'k':
        var kickbass=new Audio('kick-bass.mp3');
        kickbass.play();

        break;
    case 'l':
        var snare=new Audio('snare.mp3');
        snare.play();

        break;
    default:
        break;
}

})
document.addEventListener('keypress',function($event){
    var k1=$event.key
    console.log($event.key)
    buttonAnimation($event.key)
    switch (k1) {
        case 'w':
            var tom1=new Audio('tom-1.mp3');
            tom1.play();
    
            break;
        case 'a':
            var tom2=new Audio('tom-2.mp3');
            tom2.play();
    
            break;
        case 's':
            var tom3=new Audio('tom-3.mp3');
            tom3.play();
    
            break;
        case 'd':
            var tom4=new Audio('tom-4.mp3');
            tom4.play();
    
            break;    
        case 'j':
            var crash=new Audio('crash.mp3');
            crash.play();
    
            break;
        case 'k':
            var kickbass=new Audio('kick-bass.mp3');
            kickbass.play();
    
            break;
        case 'l':
            var snare=new Audio('snare.mp3');
            snare.play();
    
            break;
    
        default:
            break;
    }
})
function buttonAnimation(currentkey){
var activeButton= document.querySelector("."+currentkey)
console.log(activeButton)
activeButton.classList.add("pressed")
setTimeout(function(){
    activeButton.classList.remove("pressed")
},100);
}
}

