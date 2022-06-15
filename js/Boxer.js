class Boxer extends Fighter{
    constructor(name, height, weight, kindSport, powerLeftHand, powerRightHand, numberWins, numberDefeats, wbcTitle, wbaTitle, ibfTitle, wboTitle){
       super(name, height, weight, kindSport, powerLeftHand, powerRightHand, numberWins, numberDefeats)
       this.wbcTitle = wbcTitle
       this.wbaTitle = wbaTitle
       this.ibfTitle = ibfTitle
       this.wboTitle = wboTitle 
    }
    
}