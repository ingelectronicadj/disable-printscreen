/** TO DISABLE SCREEN CAPTURE **/
// The keypress method only detects keys that generate printable characters
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('Capturas de pantalla deshabilitadas!');
    }
});

/** TO DISABLE PRINTS WHIT CTRL+P **/
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key == 'p') {
        alert('Esta sección no se permite imprimir o exportar en PDF');
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

/* TO DO: There are combinations that remain to be solved 
    --> Windows+Shift+S
*/