import {theBoss, theHero, choixBoss, choixHero, choixNomPerso, pointDeVie, pointAttaque, choixMode, modeDefense, modeAttaque,choixptMana, choixNbreFleche, tour, choixEnigme} from "./module/fonction.js";
import {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer} from "./module/classe.js";


let demande = confirm("Veux tu faire une partie de Geek of Legend ?");

if (demande) {
    // Choisir un Boss aléatoirement
    choixBoss();
    // Demander au joueur le nom de ses personnages
    choixNomPerso();
    // Demander au joueur comment il réparti les ptVie de ses personnages
    pointDeVie();
    // Demander au joueur comment il réparti les ptAttaque de ses personnages
    pointAttaque()
    // console.log(guerrier.nom, mage.nom, archer.nom);
    // console.log(guerrier.ptVie, mage.ptVie, archer.ptVie);
    // console.log(guerrier.ptAttaque, mage.ptAttaque, archer.ptAttaque);

    // Demander au joueur quel mode il choisi pour ses personnages
    choixMode()
    // console.log(guerrier, mage, archer);

    // Mettre un nombre de flèches aléatoirement
    choixNbreFleche();
    // Mettre un nombre de mana aléatoirement
    choixptMana();

    // Lancer le tour
    do {
        if (theBoss.ptVie >= 40) {
            tour();    
        }
        else{
            choixEnigme();
            break;
        }
    } while (guerrier.ptVie >=0 && mage.ptVie >= 0 && archer.ptVie >= 0);
  
}
else{
    alert("Je comprends, tu dois te remettre au travail.\nCourage bg")
}




