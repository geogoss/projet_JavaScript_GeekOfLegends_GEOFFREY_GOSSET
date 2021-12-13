
import {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer} from "./classe.js";

// Fonction qui choisi le boss de manière aléatoire
var theBoss 
function choixBoss() {
    let number = Math.round(Math.random()*2);
    switch (number) {
        case 0:
            theBoss = sauron;
            break;
        case 1:
            theBoss = chronos;
            break;
        case 2:
            theBoss = lilith
            break;
    
        default:
            console.log("Ta fonction ne fonctionne pas !!!");
            break;
    }
}

// Fonction : Le boss se bat contre un héro de manière aléatoire

var theHero 
function choixHero() {
    let number = Math.round(Math.random()*2);
    switch (number) {
        case 0:
            theHero = guerrier;
            break;
        case 1:
            theHero = mage;
            break;
        case 2:
            theHero = archer;
            break;
    
        default:
            console.log("Ta fonction ne fonctionne pas !!!");
            break;
    }
}

// Fonction demander au joueur quels noms donner aux joueurs
function choixNomPerso() {
    let nomGuerrier = prompt("Comment veux tu appeler ton guérrier ?")
    guerrier.nom = nomGuerrier
    let nomMage = prompt("Comment veux tu appeler ton mage ?")
    mage.nom = nomMage
    let nomArcher = prompt("Comment veux tu appeler ton archer ?")
    archer.nom = nomArcher
}

// Fonction qui fait choisir au joueur comment répartir ses points de vie
function pointDeVie() {
    do {
        alert("Voici 300 points de vie.\nComment veux-tu les répartir entre tes 3 personnages ?");
        let pointGuerrier =  prompt("Combien de point donnes tu à " + guerrier.nom + " ?");
        guerrier.ptVie = pointGuerrier;
        let pointMage =  prompt("Combien de point donnes tu à " + mage.nom + " ?");
        mage.ptVie = pointMage;
        let pointArcher =  prompt("Combien de point donnes tu à " + archer.nom + " ?");
        archer.ptVie = pointArcher;
        var sommePointVie = parseInt(guerrier.ptVie) + parseInt(mage.ptVie) + parseInt(archer.ptVie);
    
    } while (sommePointVie !== 300);
}

// Fonction qui fait choisir au joueur comment répartir ses points d'attaque
function pointAttaque() {
    do {
        alert("Voici 100 points d'attaque.\nComment veux-tu les répartir entre tes 3 personnages ?");
        let pointGuerrier =  prompt("Combien de point donnes tu à " + guerrier.nom + " ?");
        guerrier.ptAttaque = pointGuerrier;
        let pointMage =  prompt("Combien de point donnes tu à " + mage.nom + " ?");
        mage.ptAttaque = pointMage;
        let pointArcher =  prompt("Combien de point donnes tu à " + archer.nom + " ?");
        archer.ptAttaque = pointArcher;
        var sommePointAttaque = parseInt(guerrier.ptAttaque) + parseInt(mage.ptAttaque) + parseInt(archer.ptAttaque);
    
    } while (sommePointAttaque !== 100);
}

// Fonction qui enclenche le mode défense
function modeDefense(nom) {
    nom.ptAttaque = nom.ptAttaque * 0.5;
    nom.ptVie = nom.ptVie * 2.5;
}

// Fonction qui enclenche le mode atttaque
function modeAttaque(nom) {
    nom.ptAttaque = nom.ptAttaque * 1.4;
    nom.ptVie = nom.ptVie * 0.75;

}

// Fonction qui demande au joueur quel mode activer pour chacun de personnages
function choixMode() {
    alert("Quel mode choisis-tu pour chacun de tes personnages ?");
    let modeGuerrier = +prompt("Pour ton guérrier, tu choisis le mode :\n1 => défense\n2 => attaque\n3 => normal ?")
    switch (modeGuerrier) {
        case 1:
           modeDefense(guerrier);
           break;

        case 2:
            modeAttaque(guerrier);
            break;

        case 3:
            // le mode normal rien ne change!
            break;

        default:
            alert("Ta réponse doit être 1 ou 2 ou 3");
            break;
    }
    let modeMage = +prompt("Pour ton mage, tu choisis le mode :\n1 => défense\n2 => attaque\n3 => normal ?")
    switch (modeMage) {
        case 1:
           modeDefense(mage);
           break;

        case 2:
            modeAttaque(mage);
            break;

        case 3:
            // le mode normal rien ne change!
            break;

        default:
            alert("Ta réponse doit être 1 ou 2 ou 3");
            break;
    }
    let modeArcher = +prompt("Pour ton archer, tu choisis le mode :\n1 => défense\n2 => attaque\n3 => normal ?")
    switch (modeArcher) {
        case 1:
           modeDefense(archer);
           break;

        case 2:
            modeAttaque(archer);
            break;

        case 3:
            // le mode normal rien ne change!
            break;

        default:
            alert("Ta réponse doit être 1 ou 2 ou 3");
            break;
    }
}

// Fonction qui lance l'attaque du guerrier
function guerrierAttaque() {
    // si ptRage guerrier arrive à 4 => on augmente les ptAttaque de 25%
    if (guerrier.ptRage == 4) {
        guerrier.ptAttaque *= 1.25
    }
    // c'est parti pour l'attaque
    console.log(guerrier.nom + " attaque " + theBoss.nom);
    theBoss.ptVie -= guerrier.ptAttaque;
    console.log(guerrier.nom + " a infligé " + guerrier.ptAttaque + " points de dégat à " + theBoss.nom);
    console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);
    // Après l'attaque du guerrier et avant de lui ajouter 1 point attaque je lui enlève ses 25% de point d'attaque si ses ptRage = 4
    if (guerrier.ptRage == 4) {
        guerrier.ptAttaque /= 1.25
    }
        // guerrier.ptRage augmente de 1 à chaque tour
        guerrier.ptRage ++

}

// Fonction qui lance l'attaque du mage
function mageAttaque() {
    console.log("C'est au tour de " + mage.nom + " d'attaquer " + theBoss.nom );
        // si le mage n'a pas assez de point mana
    if (mage.ptMana == 0) {
        mage.ptMana += 7;
        mage.ptVie -= 2;
        console.log(mage.nom + " n'a plus de flèche, il passe son tour");
    }
    // Le mage a assez de point mana
    else{
        mage.ptMana -= 5
        theBoss.ptVie -= mage.ptAttaque;
        console.log(mage.nom + " a infligé " + mage.ptAttaque + " points de dégat à " + theBoss.nom);
        console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);
    }
}

// Fonction qui lance l'attaque de l'archer
function archerAttaque() {
    console.log("C'est au tour de " + archer.nom + " d'attaquer " + theBoss.nom );
    // si l'archer n'a plus assez de flèches
    if (archer.fleche == 0) {
        archer.fleche += 6
        console.log(archer.nom + " n'a plus de flèche, il passe son tour");
    }
    // l'archer a assez de flèches
    else {
        archer.fleche -=2
        archer.fleche ++
        theBoss.ptVie -= archer.ptAttaque;
        console.log(archer.nom + " a infligé " + archer.ptAttaque + " points de dégat à " + theBoss.nom);
        console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);     
    }
}

// Fonction qui lance l'attaque du boss
function bossAttaque() {
    console.log(theBoss.nom + " choisi d'attaquer " + theHero.nom );
    theHero.ptVie -= theBoss.ptAttaque;
    console.log(theBoss.nom + " a infligé " + theBoss.ptAttaque + " points de dégat à " + theHero.nom);
    console.log("Il reste " + theHero.ptVie + " points de vie à " + theHero.nom);
}

// Fonction qui donne aléatoirement les points de mana suivants : 7 ou 9 ou 11
function choixptMana() {
    let ptMana = Math.round(Math.random()*2)
   switch (ptMana) {
       case 0:
           mage.ptMana = 7;
           break;
       case 1:
           mage.ptMana = 9;
           break;
       case 2:
           mage.ptMana = 11;
           break;
       default:
           console.log("Ta fonction ne fonctionne pas !!!");
           break;
   }
}

// Fonction qui donne à l'archer son nombre de flèches aléatoirement
function choixNbreFleche() {
    let nbreFleche = Math.round(Math.random()*4)
   switch (nbreFleche) {
       case 0:
           archer.fleche = 7;
           break;
       case 1:
           archer.fleche = 8;
           break;
       case 2:
           archer.fleche = 9;
           break;
       case 3:
           archer.fleche = 10;
           break;
       case 4:
           archer.fleche = 11;
           break;
       default:
           console.log("Ta fonction ne fonctionne pas !!!");
           break;
   }
}


// Fonction qui lance un tour de combat
function tour() {
    console.log("C'est" + theBoss.nom + " qui va affronter tes 3 héros\nTiens toi prêt!" );
    console.log("A toi de commencer");
    // Les héros commencent à attaquer chacun à leur tour le boss
    // Le guerrier attaque le boss
    guerrierAttaque()
    // Le mage attaque le boss
    mageAttaque()
    // L'archer attaque le boss
    archerAttaque()
    // c'est au tour du boss d'attaquer 1 héro au hasard
    console.log("C'est au tour de " + theBoss.nom + " à faire une attaque sur un des héros");
    // Le héro est choisi aléatoirement
    choixHero()
    bossAttaque()
}


// Fonction derniere chance ou le boss pose une enigme au hasard sur 3
var enigme;
function choixEnigme() {
    let quelleEnigme = Math.round(Math.random()*2);
    switch (quelleEnigme) {
        // cas ou c'est cette enigme choisie au hasard
        case 0:
            enigme = prompt("Quel est le nom du magicien gris dans Lord of Ring ?");
            if (enigme != "gandalf") {
                console.log("Faux, il te reste deux essais");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !")
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0
                break;
            }
            enigme = prompt("Quel est le nom du magicien gris dans Lord of Ring ?");
            if (enigme != "gandalf") {
                console.log("Faux, il te reste un essai");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !")
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0
                break;
            }
            enigme = prompt("Quel est le nom du magicien gris dans Lord of Ring ?");
            if (enigme != "gandalf") {
                alert("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!")
                console.log("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!");
                guerrier.ptVie = 0;
                mage.ptVie = 0;
                archer.ptVie =0;
            }
            break;
        // cas ou c'est cette enigme choisie au hasard
        case 1:
            enigme = prompt("Qui a tué le professeur Rogue dans Harry Potter ?");
            if (enigme != "voldemort") {
                console.log("Faux, il te reste deux essais");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !")
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0
                break;
            }
            enigme = prompt("Qui a tué le professeur Rogue dans Harry Potter ?");
            if (enigme != "voldemort") {
                console.log("Faux, il te reste un essai");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !")
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0
                break;
            }
            enigme = prompt("Qui a tué le professeur Rogue dans Harry Potter ?");
            if (enigme != "voldemort") {
                alert("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!")
                console.log("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!");
                guerrier.ptVie = 0;
                mage.ptVie = 0;
                archer.ptVie =0;
            }
            break;
        // cas ou c'est cette enigme choisie au hasard
        case 2:
            enigme = prompt("Résous (trouve x) la fonction mathémathique suivante f(x) : y = -3x + 21");
            if (enigme != 7) {
                console.log("Faux, il te reste deux essais");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !");
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0;
                break;
            }
            enigme = prompt("Résous (trouve x) la fonction mathémathique suivante f(x) : y = -3x + 21");
            if (enigme != 7) {
                console.log("Faux, il te reste un essai");
            }
            else {
                alert("Bravo\ntu as vaincu" + theBoss.nom + " !");
                console.log("Bravo\ntu as vaincu" + theBoss.nom + " !");
                theBoss.ptVie = 0
                break;
            }
            enigme = +prompt("Résous (trouve x) la fonction mathémathique suivante f(x) : y = -3x + 21");
            if (enigme != 7) {
                alert("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!")
                console.log("Faux, tu as eu 3 essais\nJe donne le coup de grace à tes personnages!!");
                guerrier.ptVie = 0;
                mage.ptVie = 0;
                archer.ptVie =0;
            }

            break;
        default:
            console.log("Ta fonction ne fonctionne pas !!!");
            break;
    }  
}




export {theBoss,theHero, choixBoss, choixHero, choixNomPerso, pointDeVie, pointAttaque, choixMode, modeDefense, modeAttaque,choixptMana, choixNbreFleche, tour, choixEnigme}

