 
function encriptar()
{
    let texto = document.getElementById("texto").value;
    let textoEncriptado = document.getElementById("textoRecibido").value;
    let textoImagen = document.querySelector(".mensaje");
   
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi,"ai")
    .replace(/o/gi,"ober")
    .replace(/u/gi,"ufat");

    if(texto.length != 0)
    {
        document.getElementById("textoRecibido").value = textoCifrado;
        document.getElementById("texto").value = "";
        textoImagen.style.backgroundImage = "none";
    }
    else 
    {
        alert("Debe ingresar un texto");
    }
}

function desencriptar()
{
    let texto = document.getElementById("texto").value;
    let textoEncriptado = document.getElementById("textoRecibido").value;
    let textoImagen = document.querySelector(".mensaje");
   
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if(texto.length != 0)
    {
        document.getElementById("textoRecibido").value = textoCifrado;
        document.getElementById("texto").value = "";
        textoImagen.style.backgroundImage = "none";
    }
    else 
    {
        alert("Debe ingresar un texto");
    }
}


function copiar()
{
    let textoCopiado = document.querySelector(".mensaje");
    textoCopiado.select();
    document.execCommand("cut");
    document.getElementById("textoRecibido").value = "";
    alert("Texto copiado");

}





