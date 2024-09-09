function sami(str){
    return str.split("").reverse().join("")

}
console.log(sami("string"))
function daly(str){
return str.length


}
console.log(daly("vallhalla"))



function fahmi(sentence){
   const word = sentence.split(" ")
for(var i=0; i<word.length;i++){

    word[i]=word[i][0].toUpperCase() + word[i].slice(1)
}
return word.join(" ")
}
console.log(fahmi("js is shit"))

var arr=[1,5,4,7,5]
function count(arr){
 return [Math.max(...arr), Math.min(...arr)  ]

}
console.log(count(arr))


var arr=[1,5,4,7,5]
function counter(arr){

 let sum=0
 for( var i=0; i<arr.length;i++){
    sum+=arr[i]
 }
 return sum 
}
console.log(counter(arr))