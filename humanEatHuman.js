"use strict";

let data = {
    people: 75000000000,
    fedPeople: null,
    days: 0,
    food: 0,
};

let survival = {
    data,

    run() {
        while (this.data.people > 0){
            if(this.needFood()){
                this.killMan();
            }
            this.giveFood();
            this.data.days++;
            this.data.food = 0;
            console.log(`Days: ${this.data.days} , PeopleSurvival: ${this.data.people}`);
            //document.write(`Days: ${this.data.days} , PeopleSurvival: ${this.data.people} </br>`);
        }
    },

    needFood(){
        if(this.data.food === 0){
            return true;
        } else {
            return false;
        }
    },

    killMan(){
        this.data.people -= 1;
        this.data.food += 120;
    },

    giveFood(){
        for(this.data.fedPeople;this.data.fedPeople < this.data.people; this.data.fedPeople++){
            if (this.data.food <= 0){
                this.killMan();
            }
            this.data.food -= 3;
            this.data.fedPeople++;
        }
    }
};

//survival.run();
