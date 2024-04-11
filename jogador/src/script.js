function criar_ficha() {
    const jogador = {
        nome: "Wemerson",
        personagem: "Vartax",
        raca: "Bugbear",
        classe: "Clérigo",
        nivel: 5,
    };

    console.log(`${jogador.nome}`) //1° forma de monstrar o elemento
    console.log(`${jogador["nome"]}`)//2° forma de monstrar o elemento
}

