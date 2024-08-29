//Há um max de valor que a função pode se chamar, dependendo do valor, o código será finalizado pela engine do js.
function recursiva(max) {
    console.log(max);
    if(max >= 10) return; 
    max++;
    recursiva(max);
}

recursiva(0);