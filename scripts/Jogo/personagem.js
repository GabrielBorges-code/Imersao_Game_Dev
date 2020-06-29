class Personagem extends Animacao{
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - this.variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 6;
        this.qtdPulo = 0;
        this.alturaDoPulo = -38;
        this.invencivel = false; 

    }

    pula(){
        if(this.qtdPulo < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;
            somDoPulo.play();
            this.qtdPulo++;
        }
    }

    aplicaGravidade(){
        this.y = this.y + this.velocidadeDoPulo 
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial){
            this.y = this.yInicial;
            this.qtdPulo = 0; 
            
        }
    }
    tornarInvencivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000)
    }

    estaColidindo(inimigo){
        if(this.invencivel) {
            return false;
        }

        const precisao = .65;
        noFill()

        /*rect(this.x, 
            this.y, 
            this.largura, 
            this.altura);

        rect(inimigo.x, 
            inimigo.y, 
            inimigo.largura, 
            inimigo.altura);*/

        const colisao = collideRectRect(this.x, 
                                        this.y, 
                                        this.largura * precisao, 
                                        this.altura * precisao, 
                                        inimigo.x, 
                                        inimigo.y, 
                                        inimigo.largura * precisao, 
                                        inimigo.altura * precisao);

        return colisao;
    }

}