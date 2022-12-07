const usuario = {
    nome: "Juliana",
    email: "Juliana@uol.com",
    nascimento: "2020/04/01",
    role: "admin",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email, this.nascimento)
    }
}

//usuario.exibirInfos();
//const exibir = usuario.exibirInfos
//exibir();

const exibir = function(){
    console.log(this.nome);
}

const exibirNome = exibir.bind(usuario);
exibirNome();
exibir();