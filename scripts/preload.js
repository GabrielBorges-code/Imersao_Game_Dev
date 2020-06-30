function preload(){
    imagemCenario = loadImage('../assets/imagens/cenario/Cartoon_Forest_BG_04.png'); 
    imagemGameOver = loadImage('../assets/imagens/assets/game-over.png');

    imagemPersonagem = loadImage('../assets/imagens/personagem/correndo.png');
    imagemInimigo = loadImage('../assets/imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('../assets/imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('../assets/imagens/inimigos/gotinha-voadora.png');
    imagemTelaInicial = loadImage('../assets/imagens/assets/telaInicial.png');
    imagemVida = loadImage('../assets/imagens/assets/coracao.png');

    fonteTelaInicial = loadFont('../assets/imagens/assets/fonteTelaInicial.otf');

    somDoJogo = loadSound('../assets/sons/music.mp3');
    somDoPulo = loadSound('../assets/sons/jump.mp3');
    somGameOver = loadSound('../assets/sons/fail.mp3');
    somApanhou = loadSound('../assets/sons/cut.mp3');

    fita = loadJSON('../fita/fita.json');
   
}