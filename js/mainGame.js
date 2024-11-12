const gameData = {
  1: {
    text: "good morning! you wake up on a saturday thirsty, what're you reaching for?",
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
      "cold-pressed juice": {
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
    text: "time to get going! how are you going to spend your morning?",
    choices: {
      "going back to bed": {
        next: 3,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "brunch with friends": {
        next: 3,
        scores: {
          "The Corner Store": 2,
          Tatiana: 1,
          Carbone: 2,
        },
      },
      "out & about exploring the city": {
        next: 3,
        scores: {
          Tatiana: 2,
          "The Polo Bar": 1,
        },
      },
      "working out": {
        next: 3,
        scores: {
          "The Polo Bar": 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "run club": {
        next: 3,
        scores: {
          "I Sodi": 2,
          "The Corner Store": 1,
        },
      },
    },
  },
  3: {
    text: "you decide to go to lunch, what do you order?",
    choices: {
      "a juicy burger with killer fries": {
        next: 4,
        scores: {
          "4 Charles Prime Rib": 2,
          "The Corner Store": 2,
        },
      },
      "whatever your friends posted on beli": {
        next: 4,
        scores: {
          Carbone: 2,
          Tatiana: 1,
        },
      },
      "salad (does anyone do this?)": {
        next: 4,
        scores: {
          Carbone: 1,
          "The Polo Bar": 2,
        },
      },
      "trying something new!": {
        next: 4,
        scores: {
          Tatiana: 2,
          "I Sodi": 1,
        },
      },
    },
  },
  4: {
    text: "who is at lunch with you?",
    choices: {
      "table for 1": {
        next: 5,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "your long-term situationship (so nyc)": {
        next: 5,
        scores: {
          "The Corner Store": 2,
          "The Polo Bar": 1,
        },
      },
      "significant other": {
        next: 5,
        scores: {
          "The Polo Bar": 2,
          "I Sodi": 1,
          "4 Charles Prime Rib": 2,
        },
      },
      "college friends": {
        next: 5,
        scores: {
          Carbone: 2,
          Tatiana: 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "friends you made in the city": {
        next: 5,
        scores: {
          Tatiana: 2,
          "The Polo Bar": 1,
        },
      },
    },
  },
  5: {
    text: "lunch was delicious! it's time to explore, which neighborhood are you headed to?",
    choices: {
      "west village": {
        next: 6,
        scores: {
          "I Sodi": 2,
        },
      },
      "lower east side": {
        next: 6,
        scores: {
          "The Corner Store": 2,
          Tatiana: 2,
        },
      },
      soho: {
        next: 6,
        scores: {
          Carbone: 2,
        },
      },
      midtown: {
        next: 6,
        scores: {
          "The Polo Bar": 2,
        },
      },
      "upper east side": {
        next: 6,
        scores: {
          "4 Charles Prime Rib": 2,
        },
      },
    },
  },
  6: {
    text: "you've arrived! what are you going to do?",
    choices: {
      "grab coffee & yap": {
        next: 7,
        scores: {
          "The Corner Store": 2,
          "I Sodi": 1,
        },
      },
      shop: {
        next: 7,
        scores: {
          Tatiana: 2,
          Carbone: 2,
          "4 Charles Prime Rib": 1,
        },
      },
      "aimlessly walk": {
        next: 7,
        scores: {
          "I Sodi": 2,
          "The Corner Store": 1,
        },
      },
      "sit down with a drinky": {
        next: 7,
        scores: {
          "The Polo Bar": 2,
          Carbone: 2,
        },
      },
      "do something artsy": {
        next: 7,
        scores: {
          Tatiana: 2,
          "I Sodi": 1,
        },
      },
    },
  },
  7: {
    text: "you're tired and ready to go home. how are you getting there?",
    choices: {
      "take the train": {
        next: 8,
        scores: {
          "The Corner Store": 2,
        },
      },
      "get the steps in & walk": {
        next: 8,
        scores: {
          "I Sodi": 2,
        },
      },
      "citi bike (proud of you!)": {
        next: 8,
        scores: {
          Tatiana: 2,
        },
      },
      "uber/lyft (again)": {
        next: 8,
        scores: {
          Carbone: 2,
          "4 Charles Prime Rib": 2,
        },
      },
      "hail a taxi (does anyone do this)": {
        next: 8,
        scores: {
          "The Polo Bar": 2,
        },
      },
    },
  },
  8: {
    text: "you're home and you have a few hours to yourself, what are you doing?",
    choices: {
      "taking a nap": {
        next: 9,
        scores: {
          "4 Charles Prime Rib": 2,
          "I Sodi": 2,
        },
      },
      "watching a movie/show": {
        next: 9,
        scores: {
          "The Polo Bar": 1,
          "The Corner Store": 1,
        },
      },
      "watching sports": {
        next: 9,
        scores: {
          "The Corner Store": 2,
          "The Polo Bar": 1,
          Carbone: 1,
        },
      },
      "finishing up some work": {
        next: 9,
        scores: {
          "I Sodi": 2,
          "The Polo Bar": 2,
        },
      },
      "grocery shopping/doing laundry (personal hell)": {
        next: 9,
        scores: {
          "The Corner Store": 2,
        },
      },
    },
  },
  9: {
    text: "time to get ready! what are you most likely wearing?",
    choices: {
      "dress to impress": {
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
      jeans: {
        next: 10,
        scores: {
          Tatiana: 1,
          "I Sodi": 2,
        },
      },
      "something comfy": {
        next: 10,
        scores: {
          "The Corner Store": 2,
        },
      },
      "white sneakers": {
        next: 10,
        scores: {
          "The Corner Store": 1,
        },
      },
    },
  },
  10: {
    text: "what are you spending your saturday night doing?",
    choices: {
      "bar hopping": {
        next: 11,
        scores: {
          "The Corner Store": 2,
          Tatiana: 2,
        },
      },
      "celebrating a bday (there's always a bday)": {
        next: 11,
        scores: {
          Carbone: 2,
          "The Polo Bar": 1,
        },
      },
      "going to a friend's or hosting": {
        next: 11,
        scores: {
          "4 Charles Prime Rib": 2,
          "The Polo Bar": 1,
          "I Sodi": 2,
        },
      },
      "going on a date": {
        next: 11,
        scores: {
          "The Polo Bar": 2,
          "I Sodi": 2,
        },
      },
      "jazz or comedy club": {
        next: 11,
        scores: {
          "The Polo Bar": 2,
          Carbone: 2,
        },
      },
    },
  },
  11: {
    text: "it's time to call it a night, what're you grabbing on your way home?",
    choices: {
      "7th street burger": {
        next: 12,
        scores: {
          Tatiana: 2,
        },
      },
      "a new york slice": {
        next: 12,
        scores: {
          Carbone: 2,
        },
      },
      "chopped cheese (or something from bodega)": {
        next: 12,
        scores: {
          "The Corner Store": 2,
        },
      },
      water: {
        next: 12,
        scores: {
          "I Sodi": 1,
          "The Polo Bar": 1,
        },
      },
      air: {
        next: 12,
        scores: {
          "4 Charles Prime Rib": 1,
          "I Sodi": 1,
        },
      },
    },
  },
  12: {
    text: "sweet dreams! what are you dreaming about?",
    choices: {
      "something stressful": {
        next: 0,
        scores: {
          "4 Charles Prime Rib": 1,
          "I Sodi": 1,
        },
      },
      "the perfect day": {
        next: 0,
        scores: {
          "The Polo Bar": 2,
        },
      },
      "my situationship (nightmare)": {
        next: 0,
        scores: {
          Tatiana: 1,
          "The Corner Store": 1,
        },
      },
      work: {
        next: 0,
        scores: {
          "The Polo Bar": 1,
          Carbone: 1,
        },
      },
      "i don't dream": {
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
  const choicesContainer = document.getElementById("choices");

  storyText.innerHTML = `
    <div class="question-number">Question ${state} of 12</div>
    <div>${gameData[state].text}</div>
  `;

  choicesContainer.innerHTML = "";

  Object.entries(gameData[state].choices).forEach(([choice, info]) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.className = "choice-button";
    button.onclick = () => {
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

  document.getElementById("main-container").classList.remove("game-active");
  document.querySelector(".title").style.display = "block";

  container.innerHTML = `
    <div class="result-container">
      <img 
        src="smaller_images/${profile.image}" 
        alt="${result}" 
        class="responsive-image"
        style="max-width: 100%; height: auto;"
      >
      <button onclick="location.reload()" class="share-button" >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="share-icon">
          <path d="M7 17l9.2-9.2M17 17V7H7"/>
        </svg>
        <u>share with friends</u>
      </button>
    </div>
  `;
}

function startGame() {
  // Hide the title during the quiz
  document.querySelector(".title").style.display = "none";
  document.getElementById("homescreen").style.display = "none";
  document.querySelector(".start-button").style.display = "none";
  document.getElementById("game-container").style.display = "block";
  document.getElementById("main-container").classList.add("game-active");
  renderState(currentState);
}

window.onload = () => {
  const gameContainer = document.getElementById("game-container");
  if (gameContainer.style.display !== "none") {
    renderState(currentState);
  }
};
