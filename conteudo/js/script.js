//Fazer a transição entre um form e o outro
var form1   =   document.getElementById('formulario1');
var form2 = document.getElementById('formulario2');
function abrir_form2(){
    form1.style.display = 'none';
    form2.style.display = 'block'
}
function abrir_form1(){
    form1.style.display = 'block';
    form2.style.display = 'none'
}
//Validação de formulario de cadastro de clientes
let validator_form  = {
    handleSubmit:(event) => {
        event.preventDefault();
        
        let inputs = form_cadastro_clientes.querySelectorAll('input');

        validator_form.clearErrors();

        for(let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            let check = validator_form.checkInput(input);

            if( check !== true) {
                send = false;
                validator_form.showError(input, check);
            }
        }

        if(send){
            form_cadastro_clientes.submit();
        }
    },
    checkInput:(input) => {
        let rules   =   input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetais = rules[k].split('=');
                switch(rDetais[0])  {
                    case 'required':
                        if(input.value == ''){
                            return 'Este campo é obrigatorio'
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetais[1]){
                            return 'Este campo tem que ter pelo menos '+rDetais[1]+'caracteres';
                        }
                    break;
                    case 'max':
                        if(input.value.length > rDetais[1]){
                            return 'Este campo tem que ter no maximo '+rDetais[1]+' caracteres';
                        }
                    break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'Digite um email valido';
                            }
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error) =>{
        input.style.borderColor = '#ff0000';

        let errorElement =  document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() =>{
        // remover a borda
        let inputs = document.querySelectorAll('input');
        for(let i = 0; i <inputs.length; i++){
            inputs[i].style= '';
        }
        //remover o erro de baixo
        let errorElements = document.querySelectorAll('.error');
        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove();
        }
    }
};
let form_cadastro_clientes  =   document.querySelector('.form_cadastro_cliente');
form_cadastro_clientes.addEventListener('submit', validator_form.handleSubmit);

//Validação de formulario 
let validator_form_empresa  = {
    handleSubmit:(event) => {
        event.preventDefault();
        
        let inputs = form_cadastro_empresas.querySelectorAll('input');

        validator_form_empresa.clearErrors();

        for(let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            let check = validator_form_empresa.checkInput(input);

            if( check !== true) {
                send = false;
                validator_form_empresa.showError(input, check);
            }
        }

        if(send){
            form_cadastro_empresas.submit();
        }
    },
    checkInput:(input) => {
        let rules   =   input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|');
            for(let k in rules){
                let rDetais = rules[k].split('=');
                switch(rDetais[0])  {
                    case 'required':
                        if(input.value == ''){
                            return 'Este campo é obrigatorio'
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetais[1]){
                            return 'Este campo tem que ter pelo menos '+rDetais[1]+' caracteres';
                        }
                    break;
                    case 'max':
                        if(input.value.length > rDetais[1]){
                            return 'Este campo tem que ter no maximo '+rDetais[1]+' caracteres';
                        }
                    break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'Digite um email valido';
                            }
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error) =>{
        input.style.borderColor = '#ff0000';

        let errorElement =  document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement, input.ElementSibling);
    },
    clearErrors:() =>{
        // remover a borda
        let inputs = document.querySelectorAll('input');
        for(let i = 0; i <inputs.length; i++){
            inputs[i].style= '';
        }
        //remover o erro de baixo
        let errorElements = document.querySelectorAll('.error');
        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove();
        }
    }
};
let form_cadastro_empresas  =   document.querySelector('.cadastro_empresa');
form_cadastro_empresas.addEventListener('submit', validator_form_empresa.handleSubmit);