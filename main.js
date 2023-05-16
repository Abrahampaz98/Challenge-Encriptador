const textArea=document.querySelector(".texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    textArea.value="";
    if (mensaje.value!=0){
        mensaje.style.backgroundImage="none";
    }else{
        window.alert("No hay mensaje para encriptar");
        //swal("!Oops", "No hay mensaje para encriptar","error");
    }
}
function encriptar(textoEncriptar){
    let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptar=textoEncriptar.toLowerCase();
    for (let i=0;i<matriz.length;i++) {
        if (textoEncriptar.includes(matriz[i][0])){
            textoEncriptar=textoEncriptar.replaceAll(matriz[i][0],matriz[i][1]);
        }
    }
    return textoEncriptar;
    }

    function btnDesencriptar(){
        const textoEncriptado=desencriptar(textArea.value);
        mensaje.value=textoEncriptado;
        textArea.value="";
        if (mensaje.value!=0){
            mensaje.style.backgroundImage="none";
        }else{
            window.alert("No hay mensaje para desencriptar");
            //swal("!Oops", "No hay mensaje para desencriptar","error");
        }
    }
    function desencriptar(textodesencriptar){
        let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        textodesencriptar=textodesencriptar.toLowerCase();
        for (let i=0;i<matriz.length;i++) {
            if (textodesencriptar.includes(matriz[i][1])){
                textodesencriptar=textodesencriptar.replaceAll(matriz[i][1],matriz[i][0]);
            }
        }
        return textodesencriptar;
        }
        function btncopy() {
            var copy=mensaje.value;
            navigator.clipboard.writeText(copy);
            if (mensaje.value==0){
                window.alert("No hay mensaje para copiar");
            }
        }