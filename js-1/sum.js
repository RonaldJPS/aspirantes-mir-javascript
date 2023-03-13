function sum(number) {
    var total = 0;
    for(let i = 1; i <= number; i++) {
        total += i;
    }
    return total;
}
//ciclos 

console.log(sum(4));
console.log(sum(10));
console.log(sum(15));