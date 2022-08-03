class Paralelepipedo {
    constructor(altura, largura, comprimento) {
        this.altura = altura
        this.largura = largura
        this.comprimento = comprimento
    }

    infoParalelepipedo() {
        console.log(`Altura: ${this.altura} \nLargura: ${this.largura} \nComprimento: ${this.comprimento}`)
    }

    getArea() {
        return this.altura * this.largura
    }

    getVolume() {
        return this.altura * this.comprimento * this.largura
    }
}


const p1 = new Paralelepipedo(3, 2, 5)

p1.infoParalelepipedo()
console.log(p1.getArea())
console.log(p1.getVolume())