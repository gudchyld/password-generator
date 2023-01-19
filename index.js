const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two"); 


function generateRandPass(){
    let arrPass = [];
    for(let i = 0; i < 15; i++){
        let randNum = Math.floor(Math.random() * characters.length);
        arrPass.push(characters[randNum]);
    }
    return arrPass.join("");
    
}

function getPassword(){
    passOne.textContent = generateRandPass();
    passTwo.textContent = generateRandPass();
}




function copyText(){
    let copyPass = document.getElementById("pass-one");
    //copyPass.select();
    navigator.clipboard.writeText(copyPass.textContent);
    console.log(copyPass.textContent);
}

function copyText2(){
    let copyPass2 = document.getElementById("pass-two");
    //copyPass.select();
    navigator.clipboard.writeText(copyPass2.textContent);
    console.log(copyPass.textContent);
}

// console.log(generateRandPass())

