// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Récupère avec getElementsByClassName "redPurple" affiche et observe
 let redPurple = document.getElementsByClassName('redPurple');
 console.log(redPurple);

// ### 2. Fais la meme chose qu'a l'exercice 1 mais avec un querySelectorAll, observe la différence
 let redPurple = document.querySelectorAll('.redPurple');
 console.log(redPurple);
// ### 3. En utilisant querySelectorAll trouve un moyen de ne récupérer que les h1 ayant la class "redPurple"

let redPurple = document.querySelectorAll('.redPurple')[0];
console.log(redPurple);
// ### 4. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li, les éléments p et les éléments span
let allElement = document.querySelectorAll("li,p,span");
console.log(allElement);
// ### 5. Trouve le moyen de récupèrer en un seul querySelectorAll tous les éléments li ayant la class important et les éléments p 

let allElement2 = document.querySelectorAll(".important, p");
console.log(allElement2);
// ### 6. Récupère en un seul querySelectorAll uniquement les h1 et les span ayant la class "redPurple"

let allElement3 = document.querySelectorAll("h1.redPurple,span.redPurple");
console.log(allElement3);

