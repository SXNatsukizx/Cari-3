document.addEventListener("DOMContentLoaded", function () {

    // BOTONES
    const botonEntrar = document.getElementById("entrar");
    const botonContinuar = document.getElementById("continuar");
    const botonSeguirHistoria = document.getElementById("seguir-historia");
    const botonContinuarMomentos =
    document.getElementById("continuar-momentos");

    // PANTALLAS
    const pantallaIntroduccion = document.getElementById("introduccion");
    const pantallaHistoria = document.getElementById("historia");
    const pantallaPrimerasConversaciones =
        document.getElementById("primeras-conversaciones");
    const pantallaMiCorazon =
         document.getElementById("mi-corazon");     


    function mostrarPantalla(pantalla) {

        document.querySelectorAll(".pantalla").forEach(function (seccion) {
            seccion.classList.remove("activa");
        });

        pantalla.classList.add("activa");
    }


    // 1 → 2
    botonEntrar.addEventListener("click", function () {
        mostrarPantalla(pantallaIntroduccion);
    });


    // 2 → 3
    botonContinuar.addEventListener("click", function () {
        mostrarPantalla(pantallaHistoria);
    });


    // 3 → 4
    botonSeguirHistoria.addEventListener("click", function () {
        mostrarPantalla(pantallaPrimerasConversaciones);
    });
    //4 → 5 
    botonContinuarMomentos.addEventListener("click", function () {
        mostrarPantalla(pantallaMiCorazon);
    });

});