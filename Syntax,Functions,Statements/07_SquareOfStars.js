function printSquareOfStars(input){
    
    let n = Number(input);
    for(let row = 0 ; row < n; row++){
       for(let col = 0; col < n; col++){
        console.log('*' + ' '.repeat(n))
       }
    }
    
}
printSquareOfStars(5);
print('hello')