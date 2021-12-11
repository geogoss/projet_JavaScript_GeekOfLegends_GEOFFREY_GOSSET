import {choixBoss, choixUtilisateur, pointDeVie, pointAttaque, choixMode} from "./module/fonction.js";
import {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer} from "./module/classe.js";


choixBoss();
choixUtilisateur();
console.log(guerrier.nom, mage.nom, archer.nom);
pointDeVie();
console.log(guerrier.ptVie, mage.ptVie, archer.ptVie);


