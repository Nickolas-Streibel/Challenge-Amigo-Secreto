//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/* Adicionar nomes a uma lista e sortear esses nomes para os usuarios, retirando os nomes sorteados da lista */

let lista_de_nomes = [];

function adicionar_nomes_lista(){
    let nomes = document.querySelector('input').value;
    if (nomes == ''){
        console.log('Insira um nome valido por favor!');
        alert('Insira um nome valido por favor!');
    }else if (lista_de_nomes.includes(nomes)){
        console.log('Esse nome já está na lista');
        alert('Esse nome já está na lista'); 
        limpar_Campo();
    }else {
        lista_de_nomes.push(nomes);
        percorrer_array()
        console.log(lista_de_nomes);
        limpar_Campo();
    }
}

function limpar_Campo(){
    nomes = document.querySelector('input');
    nomes.value = ''; 
}

function percorrer_array() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    for (let i = 0; i < lista_de_nomes.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = lista_de_nomes[i]; 
        lista.appendChild(li); 
    }
}
/*
function sortear_amigo(){
    if (lista_de_nomes != ''){
        let sorteio = parseInt(Math.floor(Math.random() * lista_de_nomes.length));
        console.log(sorteio);
        let amigo_secreto = lista_de_nomes[sorteio];
        console.log(amigo_secreto)
        resultado('resultado', `O seu amigo secreto é ${amigo_secreto}`);
        lista_de_nomes.splice(sorteio, 1); 
        console.log(lista_de_nomes)
    }else{
        alert('Insira os nomes dos seus amigos antes de sortear!')
    }
}
*/
function sortear_amigo() {
    if (lista_de_nomes.length > 0) {
        if (lista_de_nomes.length === 1) {
            // Se houver apenas um nome restante
            let amigo_secreto = lista_de_nomes[0];
            resultado('resultado', `O seu amigo secreto é ${amigo_secreto}`);
            lista_de_nomes.splice(0, 1);
            alert('Todos os amigos já foram sorteados!');
        } else {
            // Se houver mais de um nome na lista
            let sorteio = Math.floor(Math.random() * lista_de_nomes.length);
            let amigo_secreto = lista_de_nomes[sorteio];
            resultado('resultado', `O seu amigo secreto é ${amigo_secreto}`);
            lista_de_nomes.splice(sorteio, 1);
        }
        console.log(lista_de_nomes);
    } else {
        alert('Insira os nomes dos seus amigos antes de sortear!');
    }
}

function resultado(tag, texto){
    let frase = document.getElementById(tag);
    frase.innerHTML = texto
}

/*
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
*/