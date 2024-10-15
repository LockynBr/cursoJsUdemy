function factorial(num) {
    let result = num;
    while(num > 1) {
        num--;
        result *= num;
    }
    return result;
}
  
  console.log(factorial(5)); // 120
  