const textoVermelho = document.getElementById("TextoVermelho");
const textoVerde = document.getElementById("TextoVerde");
const textoAzul = document.getElementById("TextoAzul");

const botaoAlterarVermelho = document.getElementById("btnAlterarTextoVermelho");
const botaoAlterarVerde = document.getElementById("btnAlterarTextoVerde");
const botaoAlterarAzul = document.getElementById("btnAlterarTextoAzul");

botaoAlterarVermelho.addEventListener("click", () => {
    textoVermelho.style.color = "red";
} );
botaoAlterarVerde.addEventListener("click", () => {
    textoVerde.style.color = "green";
} );
botaoAlterarAzul.addEventListener("click", () => {
    textoAzul.style.color = "blue";
} );

const botaoModo = document.getElementById("btnModo");
botaoModo . addEventListener("click", () => {
    if (document.body.style.background === "black") {
        document.body.style.background = "";
        document.body.style.color = "";
    } else {
        document.body.style.background = "black";
        document.body.style.color = "white";
    }
});