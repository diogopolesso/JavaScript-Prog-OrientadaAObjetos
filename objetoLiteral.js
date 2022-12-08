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

const admin = {
    nome: "Mariana",
    email: "mariana@uol.com",
    role: "admin",
    criarCursos(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, usuario)
admin. criarCursos()
admin.exibirInfos()


/*
usuario.exibirInfos();
const exibir = usuario.exibirInfos
exibir();

const exibir = function(){
    console.log(this.nome);
}

const exibirNome = exibir.bind(usuario);
exibirNome();
exibir();
*/