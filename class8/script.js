unction greet(){
    return "Helooo!"
}
console.log(greet());

// Method 1
function addition(x,y){
    return x+y;
}
console.log(addition(2,3));

// Method 2
let addition = function(x,y){
    return x+y;
}
console.log(addition(4,5));

// Method 3 (Arrow function)
let addition = (x,y) => x+y;
let square = (x) => x*x;
let Tax = (p,r) => {
    let final = p*(r/100);
    return final;
};

function greet(name="Guest"){
    return welcome $(name);
}
console.log(greet());
console.log(greet("Maria"));