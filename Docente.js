// Herança de Classe (User.js):

import User from "./User.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = 'Docente', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado(a) no curso ${curso}.`
    }
}

const novoDocente= new Docente('Juliana', 'juliana@uol.com', '2021/04/05');
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Juliana', 'JavaScript'));

