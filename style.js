let bouton = document.querySelectorAll(".bouton");
let codesecret = prompt("rentrer le code a trouver");
console.log("le code à trouver est : " + codesecret);
console.log(typeof codesecret);
let code = document.getElementById("code");

let result = document.querySelector("#resultat")
let nombres = [];
let min = 1;
let max = 10;
console.log(result.innerHTML);
let n;
let controle;
//fonction pour generer un tableau de 1 a 9 alleatoire avec des nombres uniques
function random (){
    nombres=[]
for (let i = 1;  nombres.length < 9; i++) {
    
    n = Math.floor(Math.random() * (max - min)) + min;
    let controle = nombres.includes(n)
    console.log(n);
    if (controle === false) {
        
        nombres.push(n)
        console.log(nombres)

    }
}
for (let b = 0; b < bouton.length; b++) {
    bouton[b].innerHTML = nombres[b]
    
}
}

random()

for (let s = 0; s < bouton.length; s++) {
    bouton[s].innerHTML = nombres[s]
    bouton[s].addEventListener("click", function(){
        
        console.log(bouton[s].innerHTML, typeof bouton[s].innerHTML)
        result.innerHTML += bouton[s].innerHTML
        console.log(result.innerHTML);
        
        if (result.innerHTML === codesecret && result.innerHTML.length === codesecret.length) {
            console.log("Code Bon");
            result.style.backgroundColor = "green"
        }
        else if (result.innerHTML !== codesecret && result.innerHTML.length === codesecret.length){
            result.style.backgroundColor = "red"
        }
        if (result.innerHTML.length >= codesecret.length + 1){
            result.innerHTML = ""
            result.style.backgroundColor = ""
        }
        random()
        
    })
    
}