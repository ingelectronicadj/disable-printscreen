// Try to include this before closing the </body>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<script>
/** TO DISABLE SCREEN CAPTURE **/
function removeClipboard(){
    // Use The Clipboard API --> https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard
    navigator.clipboard.writeText('');
}

// I use the sweetAlert2 library to customize alerts
function custom_alert(icon_alert, title_alert) {
    Swal.fire({
        icon: icon_alert,
        title: title_alert,
        backdrop: true,
        allowOutsideClick: false,
        allowEscapeKey: false
        });
}

// The keypress method only detects keys that generate printable characters
// I use keyup without using obsolete methods
document.addEventListener('keyup', (e) => {
    if (e.key == 'PrintScreen') {
        removeClipboard();
        custom_alert('error', 'Screenshots disabled!');
    }
});

/* TO DO: There are combinations that remain to be solved 
    --> Windows+Shift+S
    --> Ctrl+P 
*/
</script>
