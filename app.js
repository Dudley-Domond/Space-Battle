alert("BEGIN GAME");

const uss = prompt("CAPTAIN, YOU CAN MAKE THE FIRST MOVE!");

//const bottomRow = document.getElementsById('bottomRow');
const playerStats = document.getElementsByClassName('playerStats');
const enemyStats= document.getElementsByClassName('enemyStats');

// Define health variables


let playerHull = 15; // player health
let enemyHull = 6; // enemy health


function attack(){
    let hitChance = Math.round(Math.random()*1); //accuracy hiting between 0-1
    if (hitChance <=0.8){ // chance of sucessful hit
       let dmg = Math.round(Math.random()*2.5)+2.5;// damage done if hits succesful (5)
       playerHull -=dmg; 
       playerImage.innerHTML = "You Hit The Alien Ship With Your Attack, Doing " + dmg + " Damage.</br></br>Alien Ship Now Has " + enemyHull + " Hull!";
       return enemyHull;

    } else {
       playerImage.innerHTML="You Missed!!! </br></br>Try again, The World's Depending On You...";

    }


}


function retreat(){
    playerImage.innerHTML = "Find Some Cover Elsewhere Untill The Smoke Clears!!! "
}
