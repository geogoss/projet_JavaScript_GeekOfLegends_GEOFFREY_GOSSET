class Boss{
    constructor(nom, ptVie, ptAttaque){
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque
    }

}

let sauron = new Boss("Sauron", 200, 40);
let chronos = new Boss("Chronos", 200, 60);
let lilith = new Boss("Lilith", 200, 20);

let tabBoss = [sauron, chronos, lilith]

class Hero{
    constructor(nom, ptVie, ptAttaque){
        this.nom = nom;
        this.ptVie = ptVie;
        this.ptAttaque = ptAttaque;
        this.fctGuerrier = ()=>{

        }
        this.fctMage = ()=>{

        }
        this.fctArcher = ()=>{

        }
    }
}

let guerrier = new Hero("", 100, 9);
let mage = new Hero("", 100, 19);
let archer = new Hero("", 100, 17);

guerrier.ptRage = 3;
mage.ptMana = 0;
archer.fleche = 0;


export {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer}
