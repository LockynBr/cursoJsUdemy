function calculator(a, b, operation) {
  switch(operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return (a / b).toFixed(4);
    default:
      return "Operação Inválida";
  }
}

console.log(calculator(5, 3, 'add')); // 8
console.log(calculator(5, 3, 'subtract')); // 2
console.log(calculator(5, 3, 'multiply')); // 15
console.log(calculator(5, 3, 'divide')); // 1.6667
