// Classe genérica para herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // garante que o tipo fique em minúsculo
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque desconhecido";
        }

        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplos de uso
const heroi1 = new Heroi("Gandalf", 100, "mago");
const heroi2 = new Heroi("Ragnar", 30, "guerreiro");
const heroi3 = new Heroi("Li", 25, "monge");
const heroi4 = new Heroi("Shinobi", 22, "ninja");

heroi1.atacar(); // mago atacou usando magia
heroi2.atacar(); // guerreiro atacou usando espada
heroi3.atacar(); // monge atacou usando artes marciais
heroi4.atacar(); // ninja atacou usando shuriken

// Classe
