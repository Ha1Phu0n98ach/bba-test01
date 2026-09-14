// Bai 1
function createCharacters() {
  const characters = [
    { name: "Mario", level: 50, health: 400 },
    { name: "Jelly", level: 45, health: 300 },
    { name: "Tom", level: 30, health: 250 },
    { name: "Naruto", level: 35, health: 350 }
  ];

  const charactersPowerUp = characters.map(char => {
    return {
      name: char.name.toUpperCase(), 
      level: char.level * 2,        
      health: char.health * 3      
    };
  });

  const possibleWinners = charactersPowerUp.filter(char => char.health > 1000);

  console.log("Mảng PowerUp:", charactersPowerUp);
  console.log("Mảng Winners:", possibleWinners);

  return { charactersPowerUp, possibleWinners };
}

createCharacters();

// Bai 2
function printLeaderboard(players) {
  players.sort((a, b) => b.score - a.score);

  const medals = ["🥇", "🥈", "🥉"];

  players.forEach((player, index) => {
    let prefix = "";

    if (index < 3) {
      prefix = medals[index] + " ";
    } else {

      prefix = `${index + 1}. `; 
    }

    console.log(`${prefix}${player.name}: ${player.score}`);
  });
}

const data = [
  { name: "Luigi", score: 850 },
  { name: "Mario", score: 1000 },
  { name: "Peach", score: 1200 },
  { name: "Bowser", score: 950 },
  { name: "Yoshi", score: 700 }
];

printLeaderboard(data);