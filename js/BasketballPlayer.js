class BasketballPlayer extends Player{
    constructor(name, height, weight, kindSport, position , teamName, averagePerformance, percentageTwoPointShots, percentageThreePointShots){
       super(name, height, weight, kindSport,position, teamName )
       this.averagePerformance = averagePerformance
       this.percentageTwoPointShots  = percentageTwoPointShots
       this.percentageThreePointShots  = percentageThreePointShots
     
    }
    
}