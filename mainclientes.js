var generarIdUnicoFecha = ()=>{
    let fecha = new Date();
    return Math.floor(fecha.getTime()/1000).toString(16);
};
var appSistemaClientes = new Vue({
    el: '#appSistemaClientes',
    data: {
        forms:{
            'cliente':{mostrar:false},

        }
    },
});
document.addEventListener('DOMContentLoaded', e=>{
    let formularios = document.querySelectorAll('.mostrar').forEach(formulario=>{
        formulario.addEventListener('click', evento=>{
            let formulario = evento.target.dataset.form;
            appSistemaClientes.forms[formulario].mostrar = true;
        });
    });
});