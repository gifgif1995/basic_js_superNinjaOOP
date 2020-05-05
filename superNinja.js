class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Hi there, My name is " + this.name);
        return this;
    }

    showStats() {
        console.log("Name: " +  this.name + ", " +"Health: " + this.health + ", " +"Speed: " + this.speed + ", " + "Strength: " + this.strength);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}


class Sensei extends Ninja {
    constructor (name, health, speed, strength, wisdom) {
        super(name, health, speed, strength);
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = "Always look at the glass as half empty. . . Or is it Half full? I forgot and have had way too much Sake!"
    }
    speakWisdom() {
        super.drinkSake();
        console.log(this.wisdom);
        return this;
    }
}

const ninja1 = new Sensei("Ryan");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.drinkSake();
ninja1.speakWisdom();
ninja1.showStats();

