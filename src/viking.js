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

    console.log(`${this.name} W A S T E D`);
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
    console.log(`${this.name} has died in act of combat `);
  }

  if (this.damage >= 0){
    console.log(`${this.name} has received ${this.damage} points of damage`);
  }
}


battleCry() {
  console.log("Odin Owns You All!");
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
    console.log(`A Saxon has received ${this.damage} point of damage`);
  }

  if (this.damage > this.health){
    console.log(`A Saxon has died in combat`);
  }
}
}










// War
class War {}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

