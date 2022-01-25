const str = "Saiful Islam";
let count = 0;
for(lit of str){
    console.log(lit.search(/[aeiou]/i))
    if(lit.match(/[aeiou]/i))
        count++
}
console.log("count: ",count);