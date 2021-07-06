const Player1 = 
{name: 'Paul',
health : 100,
strength : 50,
}





// Soldier
class Soldier {
  constructor (health, strength) {
    this.health = health
    this.strength = strength
  }

attack (){
  return this.strength;
}

receiveDamage(damage){
  this.health = this.health - damage; 
  if (this.health <=0){

    console.log(`${this.health} W AS T E D`)
  }
}
}

// Viking
class Viking extends Soldier {
  constructor (name, health, strength){
  super(name);
  this.name = name
  this.health = health
  this.strength = strength
  }

attack(){
  return this.strength;
}

receiveDamage(damage){
  this.health = this.health - damage;
  if (this.health <=0){
    console.log(`${this.name} received ${damage} points of damage`);
  }
}

}

// Saxon
class Saxon {}

// War
class War {}







// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

