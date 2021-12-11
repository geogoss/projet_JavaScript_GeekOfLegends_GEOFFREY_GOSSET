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
        this.defense = () =>{
            this.ptAttaque = this.ptAttaque * 0.5;
            this.ptVie = this.ptVie * 2.5;
        }
        this.attaque = () =>{
            this.ptAttaque = this.ptAttaque * 1.4;
            this.ptVie = this.ptVie * 0.75;

        }
        this.fctGuerrier = ()=>{

        }
        this.fctMage = ()=>{

        }
        this.fctArcher = ()=>{

        }
    }
}

let guerrier = new Hero("", 0, 0);
let mage = new Hero("", 0, 0);
let archer = new Hero("", 0, 0);

guerrier.ptRage = 25;
mage.ptMana = 10;
archer.fleche = 10;


export {Boss, Hero, sauron, chronos, lilith, tabBoss, guerrier, mage, archer}
