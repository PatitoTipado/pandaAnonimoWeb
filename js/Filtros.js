const ANNE_WITH_AN_E = {nombre: "Anne with an E", img: "Anne with an E.jpg", categorias: ["Drama", "Familiar"]}
const BREAKING_BAD = {nombre: "Breaking Bad", img: "Breaking Bad.jpg", categorias: ["Crimen", "Drama", "Suspense"]}
const BRIDGERTON = {nombre: "Bridgerton", img: "Bridgerton.jpg", categorias: ["Drama", "Romance"]}
const DAHMER = {nombre: "Dahmer", img: "Dahmer.jpg", categorias: ["Biografia", "Crimen", "Drama"]}
const GAME_OF_THRONES = {nombre: "Game of Thrones", img: "Game of Thrones.jpeg", categorias: ["Accion", "Aventura", "Drama"]}
const MARIANNE = {nombre: "Marianne", img: "Marianne.jpeg", categorias: ["Drama", "Terror", "Misterio"]}
const SWEET_TOOTH = {nombre: "Sweet Tooth", img: "Sweet Tooth.jpg", categorias: ["Accion", "Aventura", "Drama"]}
const THE_WITCHER = {nombre: "The Witcher", img: "The Witcher.jpeg", categorias: ["Accion", "Aventura", "Drama"]}
const VIKINGS = {nombre: "Vikings", img: "Vikings.jpg", categorias: ["Accion", "Aventura", "Drama"]}

const A_DOG_IS_JOURNEY = {nombre: "A Dog is Journey", img: "A Dog is Journey.jpg", categorias: ["Aventura", "Comedia", "Drama"]}
const AVATAR = {nombre: "Avatar", img: "Avatar.jpg", categorias: ["Accion", "Aventura", "Fantasia"]}
const DEADPOOL_2 = {nombre: "Deadpool 2", img: "Deadpool 2.jpeg", categorias: ["Accion", "Aventura", "Comedia"]}
const FOCUS = {nombre: "Focus", img: "Focus.jpeg", categorias: ["Comedia", "Crimen", "Drama"]}
const GLADIATOR = {nombre: "Gladiator", img: "Gladiator.jpg", categorias: ["Accion", "Aventura", "Drama"]}
const HACHI_A_DOG_IS_TALE = {nombre: "Hachi A Dog is Tale", img: "Hachi A Dog is Tale.jpg", categorias: ["Biografia", "Drama", "Familiar"]}
const HEREDITARY = {nombre: "Hereditary", img: "Hereditary.jpg", categorias: ["Drama", "Terror", "Misterio"]}
const LA_LLORONA = {nombre: "La llorona", img: "La llorona.jpg", categorias: ["Crimen", "Drama", "Terror"]}
const MARLEY_AND_ME = {nombre: "Marley and me", img: "Marley and me.jpg", categorias: ["Drama", "Familiar"]}
const ME_BEFORE_YOU = {nombre: "Me Before You", img: "Me Before You.jpg", categorias: ["Drama", "Romance"]}
const REPLICAS = {nombre: "Replicas", img: "Replicas.jpeg", categorias: ["Accion", "Drama", "Ciencia Ficcion"]}
const SPLIT = {nombre: "Split", img: "Split.jpeg", categorias: ["Terror", "Suspense"]}
const TOP_GUN_MAVERICK = {nombre: "Top Gun Maverick", img: "Top Gun Maverick.jpg", categorias: ["Accion", "Drama"]}
const WHITE_CHICKS = {nombre: "White Chicks", img: "White Chicks.jpg", categorias: ["Comedia", "Crimen"]}

const PELICULAS = [
    A_DOG_IS_JOURNEY, AVATAR, DEADPOOL_2, FOCUS, GLADIATOR, HACHI_A_DOG_IS_TALE, HEREDITARY, LA_LLORONA,
    MARLEY_AND_ME, ME_BEFORE_YOU, REPLICAS, SPLIT, TOP_GUN_MAVERICK, WHITE_CHICKS
];

const SERIES = [
    ANNE_WITH_AN_E, BREAKING_BAD, BRIDGERTON, DAHMER, GAME_OF_THRONES, MARIANNE, SWEET_TOOTH, THE_WITCHER,
    VIKINGS
];

 
/*--------------------------------------------------------------------------------------------------------*/
function establecerCategoria(valor){
    const NODO_CATEGORIA = document.querySelector("#categoria");
    const NUEVA_CATEGORIA = document.createElement("option");

    NUEVA_CATEGORIA.value = valor;
    const TEXTO = document.createTextNode(valor);

    NUEVA_CATEGORIA.appendChild(TEXTO);
    NODO_CATEGORIA.appendChild(NUEVA_CATEGORIA);
}

function agregarCategorias(array, elementos){
    let sinDuplicados = [];
    for(let element of elementos){
        for(let i = 0; i < element["categorias"].length; i++){
            array.push(element["categorias"][i]);
        }
    }
    array.sort();
    for(let j = 0; j < array.length; j++){
        if(!sinDuplicados.includes(array[j])){
            sinDuplicados.push(array[j]);
        }
    }
    return sinDuplicados;
}

function agregarCategoriaSegunURL(TituloNavbar){
    let categorias = []
    switch(TituloNavbar){
        case 'Inicia sesion': 
        case "Home":
            categorias = agregarCategorias(categorias, PELICULAS);
            categorias = agregarCategorias(categorias, SERIES); 
            break;
        case "Series":
            categorias = agregarCategorias(categorias, SERIES);
            break;
        case "Peliculas":
            categorias = agregarCategorias(categorias, PELICULAS);
            break;        
    }
    return categorias;
}

/*--------------------------------------------------------------------------------------------------------*/
const VISTAS = ["./series.html", "./peliculas.html"];

function esPelicula(item){
    for(let i = 0; i < PELICULAS.length; i++){
        if(PELICULAS[i]["img"] == item){
            return true;
        }
    }
}

function agregarImgAlContenedor(img){
    const NODO_CONTENEDOR = document.querySelector(".contenedorImg");
    const ITEM = document.createElement("div");
    const A = document.createElement("a");
    const IMG = document.createElement("img");

    ITEM.classList.add("item");

    let ubicacion = "";

    if(esPelicula(img)){
        ubicacion += "../img/peliculas/" + img;
        A.href = VISTAS[1] + "?nombre=" + img +"&tipo=pelicula";
    }else{
        ubicacion += "../img/series/" + img;
        A.href = VISTAS[0] + "?nombre=" +img + "&tipo=serie";
    }

    IMG.src = ubicacion;

    A.appendChild(IMG);
    ITEM.appendChild(A);
    NODO_CONTENEDOR.appendChild(ITEM);
}

function agregarImgSegunCantidad(cantidad){
    let contadorPeliculas = 0;
    let contadorSeries = 0;

    for(let i = 0; i < cantidad; i++){
        switch(cantidad){
            case SERIES.length: 
                agregarImgAlContenedor(SERIES[contadorSeries++]["img"]);
                break;  
            case PELICULAS.length:
                agregarImgAlContenedor(PELICULAS[contadorPeliculas++]["img"]);
                break;
            case HOME:
                if(i % 2 == 0){
                    agregarImgAlContenedor(PELICULAS[contadorPeliculas++]["img"]);
                }else{
                    if(contadorSeries < SERIES.length){
                        agregarImgAlContenedor(SERIES[contadorSeries++]["img"]);
                    }else{
                        agregarImgAlContenedor(PELICULAS[contadorPeliculas++]["img"]);
                    } 
                }
                break;  
        }
    }
}

const HOME = PELICULAS.length + SERIES.length;

function agregarImgSegunURL(TituloNavbar){
    switch(TituloNavbar){
        case 'Inicia sesion': 
        case "Home":
            agregarImgSegunCantidad(HOME);   
            break;
        case "Series":
            agregarImgSegunCantidad(SERIES.length);
            break;
        case "Peliculas":
            agregarImgSegunCantidad(PELICULAS.length);
            break;     
    }
}
/*--------------------------------------------------------------------------------------------------------*/

const QUERY_PARAMS_NAV = "nav";

const url_vista = document.location.href;
const url = new URL(url_vista);
const NOMBRE_VISTA = url.searchParams.get(QUERY_PARAMS_NAV);

const QUERY_PARAMS_EMAIL = "submit";

const url_HOME = document.location.href;
const url_NEW = new URL(url_HOME);
const NOMBRE_HOME = url_NEW.searchParams.get(QUERY_PARAMS_EMAIL);

let categorias = [];

if(NOMBRE_HOME == 'Inicia sesion'){
    agregarImgSegunURL(NOMBRE_HOME);
    categorias = agregarCategoriaSegunURL(NOMBRE_HOME);
}else{
    agregarImgSegunURL(NOMBRE_VISTA);
    categorias = agregarCategoriaSegunURL(NOMBRE_VISTA);
}

for(let categoria of categorias){
    establecerCategoria(categoria);
}

/*----------------------------------------------------------------------------------------------------- */
function eliminarImg(){
    let imgs = document.querySelectorAll(".item");
    for(let img of imgs){
        img.remove();
    }
}

let nuevasImg = [];

function renovar(categoria, array, elementos){
    for(let elemento of elementos){
        let seguir = true;
        for(let i = 0; i < elemento.categorias.length && seguir; i++){
            if(categoria == elemento.categorias[i]){
                array.push(elemento);
                seguir = false;
            }
        }
    }
    return array;
}

function actualizar(array){
    eliminarImg();
    for(let nueva of array){
        agregarImgAlContenedor(nueva["img"]);
    }
}

const SELECT_CATEGORIA = document.querySelector("#categoria");

function agregarImgSegunCategoriaYURL(nuevasImg, TituloNavbar){
    switch(TituloNavbar){
        case 'Inicia sesion': 
        case "Home":
            nuevasImg = renovar(SELECT_CATEGORIA.value,nuevasImg, SERIES);
            nuevasImg = renovar(SELECT_CATEGORIA.value, nuevasImg, PELICULAS);
            break;
        case "Series":
            nuevasImg = renovar(SELECT_CATEGORIA.value,nuevasImg, SERIES);
            break;
        case "Peliculas":
            nuevasImg = renovar(SELECT_CATEGORIA.value, nuevasImg, PELICULAS);
            break;
    }
}

SELECT_CATEGORIA.addEventListener("change", () =>{
    if(NOMBRE_HOME == "Inicia sesion"){
        agregarImgSegunCategoriaYURL(nuevasImg, NOMBRE_HOME);
    if(SELECT_CATEGORIA.value == 0){
        eliminarImg();
        agregarImgSegunURL(NOMBRE_HOME);
    }else{
        actualizar(nuevasImg);
    }
    nuevasImg = [];
    }else{
        agregarImgSegunCategoriaYURL(nuevasImg, NOMBRE_VISTA);
    if(SELECT_CATEGORIA.value == 0){
        eliminarImg();
        agregarImgSegunURL(NOMBRE_VISTA);
    }else{
        actualizar(nuevasImg);
    }
    nuevasImg = [];
    }
})
/*-------------------------------------------------------------------------------------------------------*/
function empiezaCon(texto, subtexto){
    let iguales = false;
    if(texto.length > 0 && subtexto.length > 0){
        if(texto.length >= subtexto.length){
            let subcadena = texto.substring(0, subtexto.length);
            if(subcadena.toLowerCase() === subtexto.toLowerCase()){
                iguales = true;
            }
        }
    }
    return iguales;
}

let filtro = [];

function filtrarImagenes(array, subtexto, elemento){
    for(let element of elemento){
        if(empiezaCon(element.nombre, subtexto)){
            array.push(element);
        }
    }
    return array;
}

const BUSQUEDA = document.getElementById("busca");

function agregarImgSegunSubtexto(filtro, TituloNavbar){
    switch(TituloNavbar){
        case 'Inicia sesion':
        case "Home":
            filtro = filtrarImagenes(filtro, BUSQUEDA.value, SERIES)
            filtro = filtrarImagenes(filtro, BUSQUEDA.value, PELICULAS)
            break;
        case "Series":
            filtro = filtrarImagenes(filtro, BUSQUEDA.value, SERIES)
            break;
        case "Peliculas":
            filtro = filtrarImagenes(filtro, BUSQUEDA.value, PELICULAS)
            break;
    }
}

BUSQUEDA.addEventListener("keyup", (e) =>{
   
    let section= document.querySelector(".contenedorImg");

    if(NOMBRE_HOME == "Inicia sesion"){
        agregarImgSegunSubtexto(filtro, NOMBRE_HOME)
    if(BUSQUEDA.value == ""){
        eliminarImg();
        agregarImgSegunURL(NOMBRE_HOME);
    }else{
        actualizar(filtro);
        filtro = [];
    } 
    }else{
        agregarImgSegunSubtexto(filtro, NOMBRE_VISTA)
    if(BUSQUEDA.value == ""){
        eliminarImg();
        agregarImgSegunURL(NOMBRE_VISTA);
    }else{
        actualizar(filtro);
        filtro = [];
    } 
    }
    if(section.children.length === 0){
        document.getElementById("body").classList.add("d");
        document.querySelector(".contenedorImg").innerHTML+=`<section class="contenedorCategoria" id="new"><h1>no se encontro resultados</h1></section>`
    }else if(document.getElementById("new")!=null && section.children.length> 1){
        document.getElementById("body").classList.remove("d")
        document.getElementById("new").remove();
    }
})
/*-------------------------------------------------------------------------------------------------------*/
function botonFlotanteSegunVista(vista){
    const MAIN = document.querySelector("main");
    const DIV = document.createElement("div");
    const BOTON_FLOTANTE = document.createElement("button");
    const A = document.createElement("a");
    const SPAN = document.createElement("span");

    DIV.classList.add("flotante");
    BOTON_FLOTANTE.type = "submit";
    BOTON_FLOTANTE.classList.add("btn-flotante");
    A.href = "./principal.html?nav=" + vista;
    SPAN.classList.add("flecha");
    SPAN.classList.add("fa-solid");
    SPAN.classList.add("fa-arrow-up");

    A.appendChild(SPAN);
    BOTON_FLOTANTE.appendChild(A);
    DIV.appendChild(BOTON_FLOTANTE);
    MAIN.appendChild(DIV);
}

if(NOMBRE_HOME == 'Inicia sesion'){
    botonFlotanteSegunVista("Home");
}else{
    botonFlotanteSegunVista(NOMBRE_VISTA);
}