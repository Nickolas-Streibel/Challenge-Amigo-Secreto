
/* Adicionar nomes a uma lista e sortear esses nomes para os usuarios, retirando os nomes sorteados da lista 

-utilização de alerts para verificações 
-verifica se há amigos na lista e se o numero é par, para que ninguem sobre no sorteio
-utiliza uma função de atrasos para o resultado vir antes do alert e também para dar tempo da proxima pessoa vir e sortear, sem que essa saiba o amigo secreto da anterior

*/

let lista_de_nomes = [];
let conta_nomes = 0;

function adicionar_nomes_lista(){
    let nomes = document.querySelector('input').value;
    if (nomes == ''){
        console.log('Insira um nome válido por favor!');
        alert('Insira um nome válido por favor!');
    }else if (lista_de_nomes.includes(nomes)){
        console.log('Esse nome já está na lista');
        alert('Esse nome já está na lista, tente outro nome por favor!'); 
        limpar_Campo('amigo');
    }else {
        lista_de_nomes.push(nomes);
        conta_nomes++;
        percorrer_array();
        console.log(lista_de_nomes);
        limpar_Campo('amigo');
    }
}

function limpar_Campo(param){
    nomes = document.getElementById(param);
    nomes.value = ''; 
}

function percorrer_array() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 
    lista_de_nomes = lista_de_nomes.sort(); //ordem alfabética
    for (let i = 0; i < lista_de_nomes.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = lista_de_nomes[i]; 
        lista.appendChild(li); 
    }
}

function sortear_amigo(){
    //Verificar paridade
    if ((conta_nomes % 2) != 0 ) 
    {
        alert('Para efetuar o sorteio é necessário ter um número par de amigos!');
    }
    else
    {
        if (lista_de_nomes.length > 0)
        {
            document.getElementById('botao_sorteio').style.visibility = "hidden";
            if (lista_de_nomes.length == 1) {
                // Se houver apenas um nome restante
                let amigo_secreto = lista_de_nomes[0];
                resultado('resultado', `O seu amigo secreto é ${amigo_secreto}`);
                setTimeout( () => {
                    resultado('resultado', 'Fim do Sorteio: Todos os amigos já foram sorteados!');
                }, 3000);
                lista_de_nomes.splice(0, 1);
            } 
            else {
                // Se houver mais de um nome na lista
                let sorteio = Math.floor(Math.random() * lista_de_nomes.length);
                let amigo_secreto = lista_de_nomes[sorteio];
                resultado('resultado', `O seu amigo secreto é ${amigo_secreto}`);
                setTimeout( () => {
                    resultado('resultado', 'Chame o proximo amigo para sortear!') // Utilização do setTimeout para atrasar as mensagens 
                    document.getElementById('botao_sorteio').style.visibility = "visible"; //Retira o botão para que a proxima pessoa que for sortear não saiba o amigo secreto da anterior
                }, 3000);
                lista_de_nomes.splice(sorteio, 1);
            }
            console.log(lista_de_nomes);

        }
        else
        {
            alert('Insira os nomes dos seus amigos antes de sortear!');
        }
    }
}

function resultado(tag, texto){
    let frase = document.getElementById(tag);
    frase.innerHTML = texto
}
