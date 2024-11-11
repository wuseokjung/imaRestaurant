const gameData = {
  1: {
    text: "Good morning! You wake up on a Saturday thirsty, what're you reaching for?",
    choices: {
      water: {
        next: 2,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
          "The Polo Bar": 1,
        },
      },
      tea: {
        next: 2,
        scores: {
          Carbone: 2,
          "I Sodi": 1,
          "The Polo Bar": 2,
        },
      },
      mimosa: {
        next: 2,
        scores: {
          Tatiana: 2,
          "The Corner Store": 2,
          Carbone: 1,
        },
      },
      coffee: {
        next: 2,
        scores: {
          "4 Charles Prime Rib": 1,
          Carbone: 1,
          "The Polo Bar": 1,
        },
      },
      "Cold-pressed juice": {
        next: 2,
        scores: {
          Tatiana: 2,
          "The Corner Store": 1,
          "The Polo Bar": 2,
        },
      },
    },
  },
  2: {
    text: "Time to get going! How are you going to spend your morning?",
    choices: {
      "Going back to bed": {
        next: 3,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "Brunch with friends": {
        next: 3,
        scores: {
          "The Corner Store": 2,
          Tatiana: 1,
          Carbone: 2,
        },
      },
      "Out & about exploring the city": {
        next: 3,
        scores: {
          Tatiana: 2,
          "The Polo Bar": 1,
        },
      },
      "Working out": {
        next: 3,
        scores: {
          "The Polo Bar": 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "Run club": {
        next: 3,
        scores: {
          "I Sodi": 2,
          "The Corner Store": 1,
        },
      },
    },
  },
  3: {
    text: "You decide to go to lunch, what do you order?",
    choices: {
      "A juicy burger with killer fries": {
        next: 4,
        scores: {
          "4 Charles Prime Rib": 2,
          "The Corner Store": 2,
        },
      },
      "Whatever your friends posted on beli": {
        next: 4,
        scores: {
          Carbone: 2,
          Tatiana: 1,
        },
      },
      "Salad (does anyone do this?)": {
        next: 4,
        scores: {
          Carbone: 1,
          "The Polo Bar": 2,
        },
      },
      "Trying something new!": {
        next: 4,
        scores: {
          Tatiana: 2,
          "I Sodi": 1,
        },
      },
    },
  },
  4: {
    text: "Who is at lunch with you?",
    choices: {
      "Table for 1": {
        next: 5,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "Your long-term situationship (so nyc)": {
        next: 5,
        scores: {
          "The Corner Store": 2,
          "The Polo Bar": 1,
        },
      },
      "Significant other": {
        next: 5,
        scores: {
          "The Polo Bar": 2,
          "I Sodi": 1,
          "4 Charles Prime Rib": 2,
        },
      },
      "College friends": {
        next: 5,
        scores: {
          Carbone: 2,
          Tatiana: 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "Friends you made in the city": {
        next: 5,
        scores: {
          Tatiana: 2,
          "The Polo Bar": 1,
        },
      },
    },
  },
  5: {
    text: "Lunch was delicious! It's time to explore, which neighborhood are you headed to?",
    choices: {
      "West Village": {
        next: 6,
        scores: {
          "I Sodi": 2,
        },
      },
      "Lower East Side": {
        next: 6,
        scores: {
          "The Corner Store": 2,
          Tatiana: 2,
        },
      },
      Soho: {
        next: 6,
        scores: {
          Carbone: 2,
        },
      },
      Midtown: {
        next: 6,
        scores: {
          "The Polo Bar": 2,
        },
      },
      "Upper East Side": {
        next: 6,
        scores: {
          "4 Charles Prime Rib": 2,
        },
      },
    },
  },
  6: {
    text: "You've arrived! What are you going to do?",
    choices: {
      "Grab coffee & yap": {
        next: 7,
        scores: {
          "The Corner Store": 2,
          "I Sodi": 1,
        },
      },
      Shop: {
        next: 7,
        scores: {
          Tatiana: 2,
          Carbone: 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "Aimlessly walk": {
        next: 7,
        scores: {
          "I Sodi": 2,
          "The Corner Store": 1,
        },
      },
      "Sit down with a drinky": {
        next: 7,
        scores: {
          "The Polo Bar": 2,
          Carbone: 2,
        },
      },
      "Do something artsy": {
        next: 7,
        scores: {
          Tatiana: 2,
          "I Sodi": 1,
        },
      },
    },
  },
  7: {
    text: "You're tired and ready to go home. How are you getting there?",
    choices: {
      "Take the train": {
        next: 8,
        scores: {
          "The Corner Store": 2,
        },
      },
      "Get the steps in & walk": {
        next: 8,
        scores: {
          "I Sodi": 2,
        },
      },
      "Citi bike (proud of you!)": {
        next: 8,
        scores: {
          Tatiana: 2,
        },
      },
      "Uber/Lyft (again)": {
        next: 8,
        scores: {
          Carbone: 2,
          "4 Charles Prime Rib": 2,
        },
      },
      "Hail a taxi (does anyone do this)": {
        next: 8,
        scores: {
          "The Polo Bar": 2,
        },
      },
    },
  },
  8: {
    text: "You're home and you have a few hours to yourself, what are you doing?",
    choices: {
      "Taking a nap": {
        next: 9,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "Watching a movie/show": {
        next: 9,
        scores: {
          "The Polo Bar": 1,
          "Corner Store": 1,
        },
      },
      "Watching sports": {
        next: 9,
        scores: {
          "The Corner Store": 2,
          "The Polo Bar": 1,
          Carbone: 1,
        },
      },
      "Finishing up some work": {
        next: 9,
        scores: {
          "I Sodi": 2,
          "The Polo Bar": 2,
        },
      },
      "Grocery shopping/doing laundry (personal hell)": {
        next: 9,
        scores: {
          "The Corner Store": 2,
        },
      },
    },
  },
  9: {
    text: "Time to get ready! What are you most likely wearing?",
    choices: {
      "Dress to impress": {
        next: 10,
        scores: {
          "The Polo Bar": 2,
          "4 Charles Prime Rib": 2,
        },
      },
      "LBD (little black dress)": {
        next: 10,
        scores: {
          Carbone: 2,
        },
      },
      Jeans: {
        next: 10,
        scores: {
          Tatiana: 1,
          "I Sodi": 2,
        },
      },
      "Something comfy": {
        next: 10,
        scores: {
          "The Corner Store": 2,
        },
      },
      "White sneakers": {
        next: 10,
        scores: {
          "The Corner Store": 1,
        },
      },
    },
  },
  10: {
    text: "What are you spending your Saturday night doing?",
    choices: {
      "Bar hopping": {
        next: 11,
        scores: {
          "The Corner Store": 2,
          Tatiana: 2,
        },
      },
      "Celebrating a birthday (why is it always someone's birthday)": {
        next: 11,
        scores: {
          Carbone: 2,
          "The Polo Bar": 1,
        },
      },
      "Going to a friend's or hosting": {
        next: 11,
        scores: {
          "4 Charles Prime Rib": 2,
          "The Polo Bar": 1,
          "I Sodi": 2,
        },
      },
      "Going on a date": {
        next: 11,
        scores: {
          "The Polo Bar": 2,
          "I Sodi": 2,
        },
      },
      "Jazz or comedy club (aka trying to adult)": {
        next: 11,
        scores: {
          "The Polo Bar": 2,
          Carbone: 2,
        },
      },
    },
  },
  11: {
    text: "It's time to call it a night, what're you grabbing on your way home?",
    choices: {
      "7th street burger": {
        next: 12,
        scores: {
          Tatiana: 2,
        },
      },
      "A new york slice": {
        next: 12,
        scores: {
          Carbone: 2,
        },
      },
      "Chopped cheese (or something from bodega)": {
        next: 12,
        scores: {
          "The Corner Store": 2,
        },
      },
      Water: {
        next: 12,
        scores: {
          "I Sodi": 1,
          "The Polo Bar": 1,
        },
      },
      Air: {
        next: 12,
        scores: {
          "4 Charles Prime Rib": 1,
          "I Sodi": 1,
        },
      },
    },
  },
  12: {
    text: "Sweet dreams! What are you dreaming about?",
    choices: {
      "Something stressful": {
        next: 0,
        scores: {
          "4 Charles Prime Rib": 1,
          "I Sodi": 1,
        },
      },
      "The perfect day": {
        next: 0,
        scores: {
          "The Polo Bar": 2,
        },
      },
      "My situationship (nightmare)": {
        next: 0,
        scores: {
          Tatiana: 1,
          "The Corner Store": 1,
        },
      },
      Work: {
        next: 0,
        scores: {
          "The Polo Bar": 1,
          Carbone: 1,
        },
      },
      "I don't dream": {
        next: 0,
        scores: {
          "The Corner Store": 1,
          "4 Charles Prime Rib": 1,
        },
      },
    },
  },
};

const restaurantProfiles = {
  "4 Charles Prime Rib": {
    description: "The Timeless Classic",
    image: "4Charles.png",
  },
  Carbone: {
    description: "The Fiery Diva",
    image: "Carbone.png",
  },
  "I Sodi": {
    description: "The Chic Minimalist",
    image: "ISodi.png",
  },
  "The Polo Bar": {
    description: "The All-American Heiress",
    image: "PoloBar.png",
  },
  Tatiana: {
    description: "The Bold Trendsetter",
    image: "Tatiana.png",
  },
  "The Corner Store": {
    description: "The Neighborhood Sweetheart",
    image: "CornerStore.png",
  },
};

const scores = {
  "4 Charles Prime Rib": 0,
  Carbone: 0,
  "I Sodi": 0,
  "The Polo Bar": 0,
  Tatiana: 0,
  "The Corner Store": 0,
};

let currentState = 1;

function renderState(state) {
  const storyText = document.getElementById("story-text");
  // const storyImage = document.getElementById("story-image");
  const choicesContainer = document.getElementById("choices");

  storyText.textContent = gameData[state].text;
  // storyImage.src = gameData[state].image;
  choicesContainer.innerHTML = "";

  Object.entries(gameData[state].choices).forEach(([choice, info]) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "choice-button";
    button.onclick = () => {
      // Update scores
      Object.entries(info.scores).forEach(([restaurant, score]) => {
        scores[restaurant] += score;
      });

      if (info.next === 0) {
        revealResult();
      } else {
        renderState(info.next);
      }
    };
    choicesContainer.appendChild(button);
  });
}

function revealResult() {
  const maxScore = Math.max(...Object.values(scores));
  const result = Object.entries(scores).find(
    ([_, score]) => score === maxScore
  )[0];

  const container = document.getElementById("game-container");
  const profile = restaurantProfiles[result];

  container.innerHTML = `
    <div class="result-container">
      <img 
        src="smaller_images/${profile.image}" 
        alt="${result}" 
        class="responsive-image"
        style="max-width: 100%; height: auto; margin: 20px auto;"
      >
      <button onclick="location.reload()" class="choice-button" style="margin-top: 20px;">
        Play Again
      </button>
    </div>
  `;
}

function startGame() {
  document.querySelector(".title").style.display = "none";
  document.getElementById("homescreen").style.display = "none";
  document.querySelector(".start-button").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  renderState(currentState);
}

window.onload = () => {
  const gameContainer = document.getElementById("game-container");
  if (gameContainer.style.display !== "none") {
    renderState(currentState);
  }
};
