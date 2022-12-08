//Atributos Privados #:

import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";


//const novoUser = new User ('Mariana', 'mariana@uol.com', '2021/04/05');
//console.log(novoUser.exibirInfos());

// const novoAdmin = new Admin('Rodrigo', 'rodrigo@uol.com', '2021-01-01');
// console.log(novoAdmin.nome);
// novoAdmin.nome = '';
// console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', 'guilherme@uol.com', '2011/01/03')
console.log(novoDocente.exibirInfos());
