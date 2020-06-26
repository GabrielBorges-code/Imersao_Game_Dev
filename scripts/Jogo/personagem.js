class Personagem extends Animacao{
    constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        
        this.yInicial = height - this.altura
        this.y = this.yInicial

        this.velocidadeDoPulo = 0
        this.gravidade = 3
        this.qtdPulo = 0
    }

    pula(){
        if(this.qtdPulo < 2) {
            this.velocidadeDoPulo = - 30
            somDoPulo.play();
            this.qtdPulo++
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo 
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial
            this.qtdPulo = 0 
            
        }
    }

    estaColidindo(inimigo){
        const precisao = .65;
        const colisao = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

        return colisao;
    }

}