//const uss = prompt("Do you want to attack the first alien ship?");

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
       bottomRow.innerHTML = "You hit the enemy with your attack, doing " + dmg + " damage. Enemy now has " + enemyHull + "hull";
    
    } else {

      bottomRow.innerHTML="You missed";

    }
}



/*
class Ship{
constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;

}

attack(enemy){
    let hitChance = Math.random();
    if(hitChance < this.accuracy){
        enemy.takesDamage(this.firepower);
        return "You've been hit"
    }

}   
takesDamage(damage){
    this.hull -= damage;
}
*/
