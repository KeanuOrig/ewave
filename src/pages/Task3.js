/*Task 3:
Create a short program that will simulate a fight between two fighters. Each fighter must be created
using the Fighter constructor function. When creating a new fighter using this function, you need to
pass to it (all properties, except for the name, must contain a number of points; max number of
points that can be distributed is 30):
● name
● strength
● agility
● vitality
Each of these parameters will affect the hp, damage and defense of the fighter. These parameters
should not be object properties, can't be directly modified in the object by assigning new values and
should not even be readable. Instead, each fighter should have these methods:
● getName - returns the name of the fighter
● getHp - returns hp of the fighter
● takeDamage - deals damage to the fighter who called this method (the amount of damage
should be passed as an argument to this method)
● dealDamage - deals damage to the rival (rival should be passed as an argument to this
method)
The base damage of a fighter is 10. Each point of strength increases damage by 5, agility decreases
damage by 3.
The base defense of a fighter is 10. Each point of agility increases defence by 5, strength increases
defence by 3, vitality increases defence by 1.
The base hp of a fighter is 50. Each point of vitality increases hp by 10, strength increases hp by 5,
agility increases hp by 3.
Create a fight function that takes two fighters as arguments. In this function, they must take turns
inflicting damage to each other until the hp level of one of them reaches 0 (or lower). After each
attack, a message should be displayed, which will indicate the amount of hp and the name of the
fighter who received damage. When one of the fighters has been defeated, a message should
appear indicating the name of the winner.*/

import {useState} from 'react';

export default function Task3(){

/*	function Fighter (object) {
	    const name = object.name;
	    const strength = object.strength;
	    const agility = object.agility;
	    const vitality = object.vitality;
	    let damage = 10 + (strength * 5) - (agility * 3);
	    let hp = 50 + (vitality * 10) + (strength * 5) + (agility * 3);
	    return {
	        getName: () => name,
	        getDamage: () => damage,
	        getHealth: () => hp,
	        dealDamage(amount) {
	            let currentHp = hp - amount;

	            if (currentHp < 0){
	                currentHp = 0
	            } else {
	                currentHp
	            }

	            hp = currentHp;
	        },
	        attack(target) {
	            target.dealDamage(damage);
	            console.log(`${name} dealt ${damage} damage to ${target.getName()} || hp: ${target.getHealth()}`);
	        }
	    }
	}
	function fight(fighter1, fighter2) {
	    if (fighter1.getHealth() === 0) {
	        console.log(`${fighter1.getName()} is dead and can't fight`);
	        return;
	    } else if (fighter2.getHealth() === 0) {
	        console.log(`${fighter2.getName()} is dead and can't fight`);
	        return;
	    } else {
	        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
	            fighter1.attack(fighter2);
	            if (fighter2.getHealth() > 0) {
	                fighter2.attack(fighter1);
	            }
	        }
	        if (fighter1.getHealth() > 0) {
	            console.log(`${fighter1.getName()} won`);
	        } else {
	            console.log(`${fighter2.getName()} won`);
	        }
	    }
	}

	const myFighter1 = new Fighter({name: 'Naruto', strength: 10, agility: 5, vitality: 15});
	const myFighter2 = new Fighter({name: 'Sasuke', strength: 15, agility: 10, vitality: 5});

	fight(myFighter1, myFighter2)*/

	return (
		<>
			<h1>FIGHTERS</h1>
			<a href="https://gitlab.com/keanujohnorig/task-3-ewave">https://gitlab.com/keanujohnorig/task-3-ewave</a>
		</>
	)
}
