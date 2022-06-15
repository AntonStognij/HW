class SoccerPlayer extends Player{
    constructor(name, height, weight, kindSport, position , teamName, goals, numberGamesAtStart){
       super(name, height, weight, kindSport,position, teamName )
       this.goals = goals
       this.numberGamesAtStart = numberGamesAtStart
      
    }
    
}