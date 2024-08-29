function fizzBuzz(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return 'FizzBuzz';
    } else if (x % 3 === 0) {
        return 'Fizz';
    } else if (x % 5 === 0) {
        return 'Buzz';
    }
    return x;
}

// const fizzBuzz = (x) => 
//     (x % 3 === 0 && x % 5 === 0) ? 'FizzBuzz' :
//     (x % 3 === 0) ? 'Fizz' :
//     (x % 5 === 0) ? 'Buzz' :
//     x; 

function hundredNumbers() {
    for (let i = 0; i <= 100; i++) {
        console.log(fizzBuzz(i));
    }
}

hundredNumbers();

