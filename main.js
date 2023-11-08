function tocaSomPom(){   
    document.querySelector('#som_tecla_pom').play();
}

// criando a referencia constante listaDeTeclas
const listaDeTeclas = document.querySelectorAll('tecla');
//criando referencia variavel contador,atribuindo o valor inicial como "0"
let contador = 0;
//criando o codigo de repeticao WHILE e mudando para FOR
//enquando o contador for menos que o comprimento da lista ,tocara o som.
for (let contador = 0;contador < listaDeTeclas.length;contador++){ 
    const tecla = listaDeTeclas[contador];
    const efeito = tecla.classList[1]; //chamaa classe do indice 1 do som
    const idAudio =`#som_${efeito}`; //junção com template sthing
    tecla.onclick = function(){ //função anônima para tocaSom
        tocaSom(idAudio);
    }
}
    
}
