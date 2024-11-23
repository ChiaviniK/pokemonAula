let vida1 = 166;
let vida2 = 200;
vidaCompletaOponente = (vida1*100)/90;
let escolhaJ
let escolhaOp

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

function mewtowJogador(){
    escolhaJ = 1;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/150 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/150 B.gif";
    }



}

function mewtowOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 8;
    const shineOponente = Math.floor(Math.random() * 5) +1;
    if(shineOponente == 5){
        document.getElementById('oponente').src = "assets/img/150 FS.gif";    
    }else{
        document.getElementById('oponente').src = "assets/img/150 F.gif";
    }
        
}
function umbreonJogador(){
    escolhaJ = 2;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/197 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/197 B.gif";
    }


}

function umbreonOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 9;
    const shineOponente = Math.floor(Math.random() * 5) +1;
    if(shineOponente == 5){
        document.getElementById('oponente').src = "assets/img/197 FS.gif";    
    }else{
        document.getElementById('oponente').src = "assets/img/197 F.gif";
    }
        
    }

function ludvickJogador(){
    escolhaJ = 3;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/370 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/370 B.gif";
    }

}

function ludvickOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 10;
    const shineOponente = Math.floor(Math.random() * 5) +1;
    if(shineOponente == 5){
        document.getElementById('oponente').src = "assets/img/370 FS.gif";    
    }else{
        document.getElementById('oponente').src = "assets/img/370 F.gif";
    }
}
function chamrmanderJogador(){
    escolhaJ = 4;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/4 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/4 B.gif";
    }
}

function chamrmanderOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 11;
    const shineOponente = Math.floor(Math.random() * 5) +1;
    if(shineOponente == 5){
        document.getElementById('oponente').src = "assets/img/4 FS.gif";    
    }else{
        document.getElementById('oponente').src = "assets/img/4 F.gif";
    }  
        
    }
function lucarioJogador(){
    escolhaJ = 5;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/448 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/448 B.gif";
    }

}

function lucarioOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 12;
    const shineOponente = Math.floor(Math.random() * 5) +1;

    
        if(shineOponente == 5){
            document.getElementById('oponente').src = "assets/img/448 FS.gif";    
        }else{
            document.getElementById('oponente').src = "assets/img/448 F.gif";
        }
        
    
}
function corvikinightJogador(){
    escolhaJ = 6;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/823 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/823 B.gif";
    }

}

function corvikinightOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 13;
    const shineOponente = Math.floor(Math.random() * 5) +1;

        if(shineOponente == 5){
            document.getElementById('oponente').src = "assets/img/823 FS.gif";    
        }else{
            document.getElementById('oponente').src = "assets/img/823 F.gif";
        }
        
    
}
function sirfetchJogador(){
    escolhaJ = 7;
    const shineJogador = Math.floor(Math.random() * 5) +1;
    if(shineJogador == 5){
        document.getElementById('jogador').src = "assets/img/865 BS.gif";    
    }else{
        document.getElementById('jogador').src = "assets/img/865 B.gif";
    }

}

function sirfetchOponente(){
    document.getElementById('tela').style.display = 'block';
    document.getElementById('indexPg').style.display = 'none';
    escolhaOp = 14;
    const shineOponente = Math.floor(Math.random() * 5) +1;
        if(shineOponente == 5){
            document.getElementById('oponente').src = "assets/img/865 FS.gif";    
        }else{
            document.getElementById('oponente').src = "assets/img/865 F.gif";
        }        
}
