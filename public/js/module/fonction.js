
import {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer} from "./classe.js";

function choixBoss() {
    let number = Math.round(Math.random()*2);
    switch (number) {
        case 0:
            console.log(tabBoss[0]);
            break;
        case 1:
            console.log(tabBoss[1]);
            break;
        case 2:
            console.log(tabBoss[2]);
            break;
    
        default:
            console.log("Ta fonction fonctionne pas !!");
            break;
    }
}

function choixUtilisateur() {
    let nomGuerrier = prompt("Comment veux tu appeler ton guérrier ?")
    guerrier.nom = nomGuerrier
    let nomMage = prompt("Comment veux tu appeler ton mage ?")
    mage.nom = nomMage
    let nomArcher = prompt("Comment veux tu appeler ton archer ?")
    archer.nom = nomArcher
}

function pointDeVie() {
    alert("Voici 300 points de vie.\nComment veux-tu les répartir entre tes 3 personnages ?");
    let pointGuerrier =  prompt("Combien de point donne tu à " + guerrier.nom + " ?");
    guerrier.ptVie = pointGuerrier;
    let pointMage =  prompt("Combien de point donne tu à " + mage.nom + " ?");
    mage.ptVie = pointMage;
    let pointArcher =  prompt("Combien de point donne tu à " + archer.nom + " ?");
    archer.ptVie = pointArcher;
    if (pointGuerrier + pointMage + pointArcher > 300) {
        alert("Tu as dépassé ton cota de 300 points de vie à répartir !\nRecommence!")
        pointDeVie()
    }
}
function pointAttaque() {
    alert("Voici 300 points d'attaque.\nComment veux-tu les répartir entre tes 3 personnages ?");
    let pointGuerrier =  prompt("Combien de point donne tu à " + guerrier.nom + " ?");
    guerrier.ptAttaque = pointGuerrier;
    let pointMage =  prompt("Combien de point donne tu à " + mage.nom + " ?");
    mage.ptAttaque = pointMage;
    let pointArcher =  prompt("Combien de point donne tu à " + archer.nom + " ?");
    archer.ptAttaque = pointArcher;
}

function choixMode() {
    alert("Quel mode choisis-tu pour chacun de tes personnages ?");
    let modeGuerrier = prompt("Pour ton guérrier, tu choisis le mode :\n défense ou attaque ?")
    switch (modeGuerrier) {
        case défense:
            return guerrier.defense;

        case attaque:
            return guerrier.attaque;
    
        default:
            alert("Ta réponse doit être défense ou attaque")
            break;
    }
}




export {choixBoss, choixUtilisateur, pointDeVie, pointAttaque, choixMode}

