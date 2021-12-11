
import {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer} from "./classe.js";

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

function choixNomPerso() {
    let nomGuerrier = prompt("Comment veux tu appeler ton guérrier ?")
    guerrier.nom = nomGuerrier
    let nomMage = prompt("Comment veux tu appeler ton mage ?")
    mage.nom = nomMage
    let nomArcher = prompt("Comment veux tu appeler ton archer ?")
    archer.nom = nomArcher
}

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

function modeDefense(nom) {
    nom.ptAttaque = nom.ptAttaque * 0.5;
    nom.ptVie = nom.ptVie * 2.5;
}

function modeAttaque(nom) {
    nom.ptAttaque = nom.ptAttaque * 1.4;
    nom.ptVie = nom.ptVie * 0.75;

}


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

function guerrierAttaque() {
    console.log(guerrier.nom + " attaque " + theBoss.nom);
    theBoss.ptVie -= guerrier.ptAttaque;
    console.log(guerrier.nom + " a infligé " + guerrier.ptAttaque + " points de dégat à " + theBoss.nom);
    console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);
 
}
function mageAttaque() {
    console.log("C'est au tour de " + mage.nom + " d'attaquer " + theBoss.nom );
    theBoss.ptVie -= mage.ptAttaque;
    console.log(mage.nom + " a infligé " + mage.ptAttaque + " points de dégat à " + theBoss.nom);
    console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);
}

function archerAttaque() {
    console.log("C'est au tour de " + archer.nom + " d'attaquer " + theBoss.nom );
    theBoss.ptVie -= archer.ptAttaque;
    console.log(archer.nom + " a infligé " + archer.ptAttaque + " points de dégat à " + theBoss.nom);
    console.log("Il reste " + theBoss.ptVie + " points de vie à " + theBoss.nom);
}

function bossAttaque() {
    console.log(theBoss.nom + " choisi d'attaquer " + theHero.nom );
    theHero.ptVie -= theBoss.ptAttaque;
    console.log(theBoss.nom + " a infligé " + theBoss.ptAttaque + " points de dégat à " + theHero.nom);
    console.log("Il reste " + theHero.ptVie + " points de vie à " + theHero.nom);
}


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
    // c'est au tour du boss d'attaquer 1 héro
    console.log("Cest au tour de " + theBoss.nom + " à faire une attaque sur un des héros");
    // Le héro est choisi aléatoirement
    choixHero()
    bossAttaque()
    // Les variations de guerrier.rage mage.mana et archer.fleche
    // guerrier.rage
    guerrier.ptRage ++
    if (guerrier.ptRage == 4) {
        guerrier.ptAttaque *= 1.25
        guerrier.ptAttaque = 0
    }


}





export {theBoss,theHero, choixBoss, choixHero, choixNomPerso, pointDeVie, pointAttaque, choixMode, modeDefense, modeAttaque, tour}

