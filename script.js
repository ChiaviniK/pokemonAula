let vida1 = 166;
let vida2 = 200;
vidaCompletaOponente = (vida1*100)/90;

function showIncon(image){
    const icon = image.nextElementSibling;
    icon.style.display = 'block';
}

function hideIcon(image){
    const icon = image.nextElementSibling;
    icon.style.display = 'none';
}

function setaa(){
    document.getElementById('setaLuta').style.display = 'block';
}
function setae(){
    document.getElementById('setaLuta').style.display = 'none';
}

function ataque(){
    document.getElementById('ataqueJogador').style.display = 'block';
}

function esconderAtaque(){
    document.getElementById('ataqueJogador').style.display = 'none';
}

function ataque1(){
    esconderAtaque();
    novaVidaOponente = vida1 - 20;
    vida1 = novaVidaOponente;
    novaVidaP = (100*novaVidaOponente)/vidaCompletaOponente;
    
    document.getElementById('vidaPkmOponente').style.width = `${novaVidaP}%`;
}
function ataque2(){
    esconderAtaque();
    novaVidaOponente = vida1 - 20;
    vida1 = novaVidaOponente;
    novaVidaP = (100*novaVidaOponente)/vidaCompletaOponente;
    
    document.getElementById('vidaPkmOponente').style.width = `${novaVidaP}%`;
}
function ataque3(){
    esconderAtaque();
    novaVidaOponente = vida1 - 20;
    vida1 = novaVidaOponente;
    novaVidaP = (100*novaVidaOponente)/vidaCompletaOponente;
    
    document.getElementById('vidaPkmOponente').style.width = `${novaVidaP}%`;
}
function ataque4(){
    esconderAtaque();
    novaVidaOponente = vida1 - 20;
    vida1 = novaVidaOponente;
    novaVidaP = (100*novaVidaOponente)/vidaCompletaOponente;
    
    document.getElementById('vidaPkmOponente').style.width = `${novaVidaP}%`;
}

