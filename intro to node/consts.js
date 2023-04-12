const fs=require('fs')
fs.copyFileSync('file1.txt','file2.txt')

var superheroes=require("superheroes")
var mysuperheroname=superheroes.random()
// console.log(mysuperheroname)
var supervillains=require("supervillains")
var mysupervillain=supervillains.random()
console.log(mysupervillain)