// const Viking =  {
// name: 'Odin',
// health : 100,
// strength : 50,
// }

// const Soldier =  {
//   name: 'Marie',
//   health : 200,
//   strength : 25,
//   }

// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  } 
attack (){
  return this.strength;
}

receiveDamage(damage){
  this.health = this.health - damage; 
  if (this.health <=0){

    return `${this.name} W A S T E D`;
  }
}
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
  super(name);
  this.name = name;
  this.health = health;
  this.strength = strength;
  }

attack(){
  return this.strength;
}

receiveDamage(damage){
  this.health = this.health - damage;

  if (this.health <= 0){
    return `${this.name} has died in act of combat`;
  }

 
    return `${this.name} has received ${damage} points of damage`;
 
}


battleCry() {
  return "Odin Owns You All!"
} 

}

// Saxon
class Saxon extends Soldier{

  attack(){
    return this.strength;
  }


receiveDamage(damage){
  this.health = this.health - damage;

  if (this.health <= 0){
    return `A Saxon has died in combat`;
  }

  if (damage > this.health){
    return `A Saxon has received ${damage} points of damage`;
  }
}
}

let saxon = new Saxon(100,300)
saxon.receiveDamage(10)
console.log(saxon)














// War
class War {}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

