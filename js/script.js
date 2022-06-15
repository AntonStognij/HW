//основная сушность - спортсмен
const sportsman = new Sportsman ("Anton",192, 100, "basketball")
console.log(sportsman)
//его настледуют обьекты Игроки, Бойци и Легкоатлеты
const player = new Player ("Vasya",180, 80, "football", "forward", "barcelona" )
console.log(player)

const fighter = new Fighter("Andrew", 200, 120, "boxing", "80kg", "100kg", 25, 0)
console.log(fighter)

const athletics = new Athletics ("Roma",198, 80,"long jump", "gold medal at the European Championship","long jump")
console.log(athletics)

//от Игрока наследуются класс Баскетболист и Футболист
const basketballPlayer = new BasketballPlayer ("Zhenya", 210, 90, "basketball", "center",  "Memphis", 30, 50, 60)
console.log(basketballPlayer)

const soccerPlayer = new SoccerPlayer ("Koliy", 185, 80, "football", "defender","Chelsea", 30, 100)
console.log(soccerPlayer)

//от Бойца наследуются класс Боксер и Каратист
const boxer = new Boxer ("Anton",187, 90, "boxing", "100kg", "120kg", 15, 5,0,0,0,1)
console.log(boxer)

const karate = new Karate ("Bogdan", 175, 70, "karate", "70kg", "90kg", 40,10, "black")
console.log(karate)

//от Легкоатлета наследуются класс Бегун и Метатель молота
const runner = new Runner ("Vlad", 180, 75, "Athletics", "Silver medal at the national championship", "100m run", "10,28s", "22,64s", "34,74s" )
console.log(runner)
const hammerThrower = new HammerThrower ("Petya", 180, 90, "Athletics", "bronze medal at the Olympic games", "hammer throwing", "86,74m" )
console.log(hammerThrower)
