function criarVetorCores() {
    const vetorCores = [];

    for (let i = 1; i <= 148; i++) {
        const colorName = document.querySelector(`#box${i} > span > a`).innerText.toLowerCase();
        vetorCores.push(colorName); 
    }

    console.log(vetorCores);
    return vetorCores;
}

function selecionarCores() {
    let vetorCoresSelecionadas = []; 

    const vetorCores = criarVetorCores(); 

    for (let i = 0; i < 10; i++) {
        const aleatorio = Math.floor(Math.random() * vetorCores.length);
        
        const corSelecionada = vetorCores[aleatorio];
        
        vetorCoresSelecionadas.push(corSelecionada);
    }

    console.log(vetorCoresSelecionadas); 
    return vetorCoresSelecionadas; 
}

const randomIndex = Math.floor(Math.random() * vetorCoresSelecionadas.length);
const corSelecionada = vetorCoresSelecionadas[randomIndex];

console.log("Cor escolhida:", corSelecionada);

return vetorCoresSelecionadas;
