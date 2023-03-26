# Code JS détaillé

1. La const bubble est donc une balise span, créée en javascript.
   On injecte la classe créée en CSS à notre bubble.
   On ajoute un enfant à notre body, ici notre bubble.
   Math.random permet de générer un chiffre entre 0 et 1.<br><br>
2. On le multiplie par 200 et on ajoute 100 pour avoir un chiffre entre 100 et 300. On ajoute "px" pour signifier qu'on veut une mesure en pixel. Ensuite on modifie la hauteur et largeur avec bubble.style. Puis on modifie sa position avec style.top et left vu qu'elle est en absolute. On veut qu'elle soit au moins à 50% du bas<br><br>
3. On va toucher notre variable css avec setproperty et lui injecter un mathrandom puisqu'on ne peut pas toucher directement un keyframe.
   Pour pas que ça n'aille que vers la droite on créer la const plusMinus qui est une fonction en mode if, elle test si mathrandom est supérieur à 0.5. Si oui tu renvois 1 sinon tu renvois -1. Donc 1 fois sur 2 on sera en négatif.
   On ajoute cette fonction au setproperty et une fois sur 2 il multiplie le résultat par 1 ou -1<br><br>
4. On veut maintenant pouvoir détruire les bulles au clic, c'est le bubble.addEventListner avec le remove
   Puis on veut faire un compteur (qu'on crée dans le h3). Puis on va le pointer (on le fait tout en haut, car on met les variables en haut).
   On créer une variable compteur (counter) pour le faire évoluer. On ajoute counter++ (incrément) dans notre addeventlistener qui casse la bulle quand on clique dessus.
   Puis on y ajouter counterDisplay (nomvarDisplay) . textcontent, le resultat de counter (l'incrément).<br><br>
5. On veut supprimer nos bulles au bout de 8 sec (le temps de l'animation) pour ne pas surcharger le dom. On fait ça dans le setTimeout<br><br>
6. Maintenant on veut en créer plusieurs. C'est à ce moment qu'on a ajouter la fonction bubbleMaker en haut. On appelle notre fonction bubbleMaker dans un set interval

```js

const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
    // 1
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

    // 2
  const size = Math.random() * 100 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
    //3
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

//4
  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });
  //5
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

//6
 Injecte une nouvelle bulle toutes les 1 sec
setInterval(bubbleMaker, 1000);
```
