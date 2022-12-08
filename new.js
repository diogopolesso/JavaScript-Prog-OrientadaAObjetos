// NEW Função Construtora que equivale a Classes em Java Script:

/*
function User(nome, email){
    this.nome = nome
    this.email = email

    this.exibirInfos = function(){
        return `${this.nome}, ${this.email}`
    }
}

const novoUser = new User('Juliana', 'juliana@uol.com')
console.log(novoUser.exibirInfos());

function Admin(role){
    User.call(this, 'Juliana', 'juliana@uol.com')
    this.role = role || 'estudante'
}

Admin.prototype = Object.create(User.prototype)
const novoUser = new Admin('Admin')
console.log(novoUser.exibirInfos())
console.log(novoUser.role)
*/

// Formato de Objeto:

const user = {
    init: function (nome, email){
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome){
        return this.nome
    }
}

const novoUser = Object.create(user);
novoUser.init('Juliana', 'juliana@uol.com');
console.log(novoUser.exibirInfos());

//Testar se User esta sendo usado como Protótipo de novoUser:
console.log(user.isPrototypeOf(novoUser));
