// Selection du compteur
const counterDisplay = document.querySelector("h3");
let counter = 0;

/**
 * créer une bulle et lui donne une taille et une position aléatoire
 * l'éclate au clic et incrémente le compteur
 * fait disparaitre les bulles au bout de 8 secondes
 */
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

// Injecte une nouvelle bulle toutes les 1 sec
setInterval(bubbleMaker, 1000);
