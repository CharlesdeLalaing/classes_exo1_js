// ## EXO1
// ### Créer une class Personnage avec comme propriétés : 
// ### age , nom , ville
// ### Faire 2 instances de cette class.

class Personnage {
    constructor(age, nom, ville){
        this.age = age;
        this.nom = nom,
        this.ville = ville,
        this.sePresenter = () => {
            return console.log(`Bonjour je m'appelle ${this.nom}.`);
        }
    }
}

let charles = new Personnage(22, "Charles", "Uccle");
let camille = new Personnage(21, "Camille", "Woluwe-Saint-Pierre");

console.log(charles);
console.log(camille);
charles.sePresenter();
camille.sePresenter();



// ## EXO2
// ### Rajouter la methode 'sePresenter' à la class Personnage qui dira "Bonjour, je m'appelle [nom-de-la-personne] !" via un console.log
// ### Lancer cette méthode sur les deux instances de l'exo1