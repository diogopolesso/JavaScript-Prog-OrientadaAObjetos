// Construtor de Classe (Herança de Classe - Atributos Privados # - Getters):

export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
       this.#nome = nome
       this.#email = email
       this.#nascimento = nascimento
       this.#role = role || 'estudante'
       this.#ativo = ativo
    }

    get nome() {
        return this.#nome
      }
    
      get email() {
        return this.#email
      }
    
      get nascimento() {
        return this.#nascimento
      }
    
      get role() {
        return this.#role
      }
    
      get ativo() {
        return this.#ativo
      }
    
      set nome(novoNome) {
        if (novoNome === '') {
          throw new Error('formato não válido')
        }
        this.#nome = novoNome
      }

    exibirInfos(){
        return `Usuario: ${this.#nome}, e-mail: ${this.#email}`
    }
}

const novoUser = new User('Juliana', 'juliana@uol.com', '2021/01/01');
console.log(novoUser);
console.log(novoUser.exibirInfos());

// Testar se User esta sendo usado como Protótipo de novoUser:
console.log(User.prototype.isPrototypeOf(novoUser))
 