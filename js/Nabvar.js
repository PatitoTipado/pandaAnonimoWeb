const NAVBAR = {
    url : ["./principal.html?nav=Home", "./principal.html?nav=Series", "./principal.html?nav=Peliculas", 
        "./vistaPerfilUsuario.html", "../Index.html"],
    titulo : ["Home", "Series", "Peliculas", "Perfil", "Cerrar"],
    icono : ["fa-home", "fa-film", "fa-film", "fa-user-circle", "fa-right-from-bracket"]
}

function agregarItemAlMenu(url, titulo, icono){
    const MENU = document.querySelector(".menu");

    const NUEVO_ELEMENTO = document.createElement("li");
    const NUEVO_ICONO = document.createElement("i")
    const A = document.createElement("a");
    A.href = url;

    const TEXTO = document.createTextNode(titulo);

    NUEVO_ICONO.classList.add("fa")
    NUEVO_ICONO.classList.add(icono);
    NUEVO_ICONO.classList.add("white")

    A.classList.add(titulo);

    NUEVO_ELEMENTO.appendChild(NUEVO_ICONO);
    A.appendChild(TEXTO);
    NUEVO_ELEMENTO.appendChild(A); 
    MENU.appendChild(NUEVO_ELEMENTO);

    if(titulo == "Home"){
        NUEVO_ELEMENTO.classList.add("navhome");
    }
}

for(let i = 0; i < NAVBAR["url"].length; i++){
    agregarItemAlMenu(NAVBAR["url"][i], NAVBAR["titulo"][i], NAVBAR["icono"][i]);
}

const CERRAR = document.querySelector(".Cerrar");
CERRAR.addEventListener("click", () =>{
    localStorage.clear();
})