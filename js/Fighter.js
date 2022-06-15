class Fighter extends Sportsman{
    constructor(name, height, weight, kindSport, powerLeftHand, powerRightHand, numberWins, numberDefeats){
        super(name, height, weight, kindSport)
        this.powerLeftHand = powerLeftHand
        this.powerRightHand = powerRightHand
        this.numberWins = numberWins
        this.numberDefeats = numberDefeats
    }
    
}

