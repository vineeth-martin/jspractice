$(document).ready(function(){
    // $("h1").css("color","red")
    // $("h1").text("please dont click")

    $("h1").addClass("text-property")
});

console.log($("h1").hasClass("text-property"))
$("h1").removeClass("text-property")

$("h1").click(function(){
    $("h1").css("color","green")
});
$(document).keypress(function(event){
    $("h1").text(event.key);
});
$("h1").on("click",function(){
    $("h1").text("Got clicked");
});
console.log($("img").attr("src"))
$("a").attr("src","https://www.yahoo.com")
for (var i=0;i<6;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        $("h1").css("color","red")
    });
}
$("input").keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key)
})
$("h1").append("<button type='button' >Button</button>")
$("h1").before("<button type='button' >Button</button>")
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5})
})
