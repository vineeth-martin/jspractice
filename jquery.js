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