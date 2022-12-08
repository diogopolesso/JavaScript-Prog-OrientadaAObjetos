// Construtor de Classe:

class User {
    constructor(nome, email, nascimento, role, ativo = true){
       this.nome = nome
       this.email = email
       this.nascimento = nascimento
       this.role = role || 'estudante'
       this.ativo = ativo
    }

    exibirInfos(){
        return `Usuario: ${this.nome}, e-mail: ${this.email}`
    }
}

const novoUser = new User('Juliana', 'juliana@uol.com', '2021/01/01');
console.log(novoUser);
console.log(novoUser.exibirInfos());

// Testar se User esta sendo usado como Protótipo de novoUser:
console.log(User.prototype.isPrototypeOf(novoUser))