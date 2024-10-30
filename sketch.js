let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["Pedro","Flores","Andrade"]
  return random(palavras);
}

function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function inicializaCores(){
  background("cyan");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER);
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
  /*if(mouseX < 50) {
    let palavra="P";
    text(palavra,200,200);
  }else if(mouseX < 100){
    let palavra= "Pe";
    text(palavra,200,200);
  }else if(mouseX < 150){
    let palavra= "Ped";
    text(palavra,200,200);
  }else if(mouseX < 200){
    let palavra= "Pedr";
    text(palavra,200,200);
  }else if(mouseX < 250){
    let palavra= "Pedro";
    text(palavra,200,200);
  }*/
}
