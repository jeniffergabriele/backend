let av1 = 10.0; 
let av2 = 1.0;
let recup1 = 7.0;
let recup2 = 0.0;
let nota1;
let nota2;

if (recup1 > av1){
    nota1 = recup1
} else {
    nota1 = av1
}


if (recup2 > av2){
    nota2 = recup2
} else {
    let med = (nota1 + nota2)/2
    
    if (med >= 6.0){
    console.log("Você passou com média " + med);
    }else {
    console.log("Você reprovou com média " + med);
    }
    nota2 = av2
}

let med = (nota1 + nota2)/2

if (med >= 6.0){
console.log("Você passou com média " + med);
}else {
console.log("Você reprovou com média " + med);
}

