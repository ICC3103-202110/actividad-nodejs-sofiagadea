
function Fibonacci(number){
    let n1 = 0,n2 = 1;
    for (let i = 1; i <= number; i++) {
        
        n3 = n1 +n2;
        n1 = n2;
        n2 = n3
    }
    return (n1)
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Elija un número', number => {
    console.log(`Elegiste el número ${number}!`);
    console.log(Fibonacci(number))
    readline.close()
  });
