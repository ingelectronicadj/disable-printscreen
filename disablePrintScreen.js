/** PARA MANEJO DE ALERTAS **/
function myAlert(icon_alert, title_alert, text_alert) {
    Swal.fire({
        icon: icon_alert,
        title: title_alert,
        text: text_alert,
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false
    });
}

/** PERSONALIZACION DE CONSOLA ANTE ACCESO DE HERRAMIENTAS PARA DESARROLLADOR (F12) **/
console.error('%cStop!', 'color: red;font-size:2.5rem;font-weight:bold;');  
console.warn('%cEsta es una función del navegador destinada a desarrolladores. Si alguien le dijo que copie y pegue algo aquí para habilitar una función o "piratear" la integridad del sitio, será reportado y se le bloquerá el acceso a su cuenta.', 'font-size:1.25rem;line-height:1.1;'); 

/** PARA DESHABILITAR CLIC DERECHO **/
document.oncontextmenu = function() {
    myAlert('warning', 'Clic derecho deshabilitado!', 'Trabajamos en mejorar el nivel de seguridad de nuestro sitio.');
    return false;
};

/** PARA DESHABILITAR CAPTURA DE PANTALLA **/
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        myAlert('error', 'Capturas de pantalla deshabilitadas!', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
    }
});

/** PARA DESHABILITAR IMPRESIONES o EXPORTAR A PDF CON EL COMANDO (CTRL+P) Y DESHABILITAR RECORTES DE PANTALLA (CTRL+SHIFT+S)**/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p' || e.ctrlKey && e.key == 'P') {
        myAlert('error', 'Esta sección no se permite imprimir o exportar en PDF', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
        e.preventDefault();
    } else if (e.metaKey && e.shiftKey) {
        Swal.fire({
            icon: 'warning',
            title: 'Recortes de pantalla detectados!',
            text: 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado',
            backdrop: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            grow: 'fullscreen'
        });
    } else if (e.ctrlKey && e.key == 'c' || e.ctrlKey && e.key == 'C') {
        myAlert('error', 'Esta sección no se permite copiar', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
        e.preventDefault();
    } else if (e.ctrlKey && e.key == 'x' || e.ctrlKey && e.key == 'X') {
        myAlert('error', 'Esta sección no se permite cortar', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
        e.preventDefault();
    } else if (e.ctrlKey && e.key == 'v' || e.ctrlKey && e.key == 'V') {
        myAlert('error', 'En esta sección no se permite pegar información', 'Solicitamos no intentarlo de nuevo o su acceso será interrumpido y reportado');
        e.preventDefault();
    }
});