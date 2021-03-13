

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