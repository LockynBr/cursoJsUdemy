class ValidaFormulario {
    constructor() { //O construtor recebe o fomulario e os eventos
        this.formulario = document.querySelector('.formulario');
        this.eventos()
    }

    // A função eventos receber quando o formulario for submitado e trava o envio pela função handlesubmit
    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubimit(e);
        });
    }

    // A função só é liberada quando foi retornado o submit do formulario.
    handleSubimit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.');
            this.formulario.submit();
        }
    }

    // Testa e faz a validação das senhas
    senhasSaoValidas() {
        let valid = true; //As flag valid já começam com verdadeiro, só que com o passar da validação, será retornada true ou false. Para a validação passar, o valid precisa retornar true

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        // Testa se as senhas são iguais
        if(senha.value !== repetirSenha.value) {
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais');
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais');
            valid = false;
        }

        // Testa o tamanho minimo e maximo das senhas
        if(senha.length < 6 || senha.length > 12) {
            this.criaErro(campo, 'Senha precisa estar entre 6 e 12 caracteres.');
            valid = false;
        }

        return valid;
    }

    // Testa e valida todos os campos
    camposSaoValidos() {
        let valid = true;

        //For utilizado para pegar 
        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        //For utilizado para pegar todos os campos que possuem a tag validar.
        for(let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText; //Garante a label do campo atual.
            if(!campo.value) { // Testa se o campo possui algum valor
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
                valid = false;
            }

            // Pega os campos com tag Cpf e valida de acordo com o outro arquivo de validar cpf.
            if(campo.classList.contains('cpf')) { 
                if(!this.validaCPF(campo)) valid = false;
            }

            // Valida o usuário utilizando a função validarUsuario.
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }

        }
        return valid;
    }

    // Função para validar usuário 
    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        // Testa o tamanho do usuário 
        if(usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        // Recebe uma regex para validar se o campo possui apenas letras e números.
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números ');
            valid = false;
        }

        return true;
    }

    // Valida o campo cpf
    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value); //Instância o cpf e passa o valor do campo

        if(!cpf.valida()) { // Valida se o cpf é válido
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }

    // Cria um campo para erro
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); // Adiciona o valor após o campo.
    }
}
// Instância a classe.
const valida = new ValidaFormulario();