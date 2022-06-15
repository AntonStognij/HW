class Player extends Sportsman{
    constructor(name, height, weight, kindSport, position, teamName){
        super(name, height, weight, kindSport);
        this.position = position;
        this.teamName = teamName;
    }
    
}