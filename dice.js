var a=[],m=6,n=6

for(var i=0;i<6;i++){
    a.push('dice'+(i+1)+'.png')
}
function rotate(){
var r=Math.random()
r*=10
m=Math.floor(r%6)
file1=a[m]
document.getElementById("myImg").src = a[m];
console.log(file1)
message();
}
function rotate2(){
    var s=Math.random()
    s*=10
    n=Math.floor(s%6)
    file2=a[n]
    document.getElementById("myImg2").src = a[n];
    console.log(file2)
message();
    }
function message(){
    if(m>n){
        document.getElementById("msg").innerHTML = 'Player1 wins';
    }
    else if(m<n){
        document.getElementById("msg").innerHTML = 'Player2 wins';

    }
    else{
        document.getElementById("msg").innerHTML = 'Both wins';

    }
}