const fields = document.querySelectorAll("[required]")
function ValidateField(field) {
    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(let error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if (field.validity[error] && !field.validity.valid ) {
                foundError = error
            }
        }
        return foundError;
    }

    function customMessage(typeError) {
        
        const messages = {
            text:{
                valueMissing: "Nome obrigatório"
                ,tooShort:  "Digite seu nome completo",
            },
            email: {
                valueMissing: "Email é obrigatório",
                typeMismatch: "Por favor, preencha um email válido"
            },
            password:{
                valueMissing: "Senha obrigatória",
                tooShort: "Senha de no minimo 6 digitos e no maximo 10",
            }
        }

        return messages[field.type][typeError]
    }

    function setCustomMessage(message) {
        const spanError = field.parentNode.querySelector("span.error")
            if (message) {
                spanError.classList.add("active")
                spanError.innerHTML = message
            } else {
                spanError.classList.remove("active")
                spanError.innerHTML = ""
            }
    }

    return function() {

        const error = verifyErrors()

        if(error) {
            const message = customMessage(error)

            field.style.borderColor = "red"
            setCustomMessage(message)
        } else {
            field.style.borderColor = "green"
            setCustomMessage()
        }
    }
}

function customValidation(event) {

    const field = event.target
    const validation = ValidateField(field)

    validation()

}

for( field of fields ){
    field.addEventListener("invalid", event => { 
        // eliminar o bubble
        event.preventDefault()

        customValidation(event)
    })
    field.addEventListener("blur", customValidation)
}


document.querySelector("form")
.addEventListener("submit", event => {
    console.log("enviar o formulário")

    // não vai enviar o formulário
})

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