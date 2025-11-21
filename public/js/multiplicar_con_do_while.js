const btn_calcular = document.getElementById('btn_calcular');
const txt_resultado = document.getElementById('txt_resultado');
const txt_alerta = document.getElementById('txt_alerta');

btn_calcular.addEventListener('click',function(event){

// capturar el valor de la caja de texto
    let txt_numero_tabla = document.getElementById('txt_numero_tabla').value;

// limpiar resultados anteriores
    txt_resultado.innerHTML = '';
    txt_alerta.innerHTML = '';

// validar que sea un numero
    if(txt_numero_tabla === '' || isNaN(txt_numero_tabla)){
        txt_alerta.innerHTML = '<div class="alert alert-danger">Por favor, ingrese un número válido</div>';
        return;
    }   
});