// OBTIENE LA URL DEL HOME 
const url = new URL(window.location.href);
const NOMBRE_SELECCION = url.searchParams.get("nombre");
const TIPO_SELECCION = url.searchParams.get("tipo");
const localSeries = localStorage.getItem("datosSeriesStorage")
const arraySeries= JSON.parse(localSeries)
const localPeliculas = localStorage.getItem("datosPeliculasStorage")
const arrayPeliculas= JSON.parse(localPeliculas)

// CARGA LOS DATOS SEGUN EL TIPO ENVIADO EN LA URL
  if (TIPO_SELECCION == 'pelicula'){
// BUSCA LA PELICULA SELECCIONADA                                                
  for (let pelicula of arrayPeliculas) {                                         
    const peliculaSeleccionada = arrayPeliculas;                                 
                                                                                             
    if (NOMBRE_SELECCION ==pelicula.img){                                                      
        let tituloPelicula = document.querySelector("#titulo");                  
        let nodo_texto = document.createElement("h2");                           
        nodo_texto.textContent = `TÍtulo : ${pelicula.nombre}` ;                 
        tituloPelicula.appendChild(nodo_texto);                                  
                                                                                 
        let generoPelicula = document.querySelector(".genero");                  
        let nodo_texto_genero = document.createElement("p");                     
        nodo_texto_genero.textContent = `Género : ${pelicula.categorias}` ;      
        generoPelicula.appendChild(nodo_texto_genero);   

        var arrayCategoria = [];
        for(let i = 0; i < pelicula.categorias.length; i++){     
          arrayCategoria.push(pelicula.categorias[i]) ;        
        };                                                                                                        
                                                                            
        let duracionPelicula = document.querySelector(".duracion");              
        let nodo_texto_duracion = document.createElement("p");                   
        nodo_texto_duracion.textContent = `Duración : ${pelicula.duracion}` ;    
        duracionPelicula.appendChild(nodo_texto_duracion);                       
                                                                                 
        let actoresPelicula = document.querySelector(".actores");                
        let nodo_texto_actores = document.createElement("a");                    
        nodo_texto_actores.setAttribute('target', `"_blank"`);                   
        nodo_texto_actores.setAttribute('href', `${pelicula.actores[0]}`);       
        nodo_texto_actores.textContent = `Actores : ${pelicula.actores[1]}` ;    
        actoresPelicula.appendChild(nodo_texto_actores);                         
                                                                                 
                                                                                 
        let sinopsisPelicula = document.querySelector(".sinopsis");              
        let nodo_texto_sinopsis = document.createElement("p");                   
        nodo_texto_sinopsis.textContent = `${pelicula.sinopsis}` ;               
        sinopsisPelicula.appendChild(nodo_texto_sinopsis);                       
                                                                                 
        let iframePelicula = document.querySelector(".iframedatos");             
        let nodo_texto_iframe = document.createElement("iframe");                
        nodo_texto_iframe.setAttribute('src', `${pelicula.iframe[0]}`);          
        nodo_texto_iframe.setAttribute('title',`${pelicula.iframe[1]}`);         
        nodo_texto_iframe.setAttribute('frameborder',`${pelicula.iframe[2]}`);   
        nodo_texto_iframe.setAttribute('allow',`${pelicula.iframe[3]}`);         
        nodo_texto_iframe.setAttribute('referrerpolicy',`${pelicula.iframe[4]}`);
        nodo_texto_iframe.textContent= `${pelicula.iframe[5]}` ;                 
        iframePelicula.appendChild(nodo_texto_iframe);                           
                                                                                 
        let btnComenzarPelicula = document.querySelector(".btnComenzar");        
        let nodo_texto_btnComenzar = document.createElement("a");                
        nodo_texto_btnComenzar.setAttribute('target', `"_blank"`);               
        nodo_texto_btnComenzar.setAttribute('href', `${pelicula.linkvideo}`);    
        nodo_texto_btnComenzar.textContent = `Comenzar` ;                        
        btnComenzarPelicula.appendChild(nodo_texto_btnComenzar);                 
    }                                                                                                                                                      
  }                                                                              
  }
    else{
      for (let serie of arraySeries) {                                              
        const serieSeleccionada = arraySeries;                                                                                                                                          
                                                                                    
        if (NOMBRE_SELECCION ==serie.img && TIPO_SELECCION == 'serie'){                        
                                                                                  
            let tituloSerie = document.querySelector("#titulo");                    
            let nodo_texto = document.createElement("h2");                          
            nodo_texto.textContent = `Título : ${serie.nombre}` ;                   
            tituloSerie.appendChild(nodo_texto);                                    
                                                                                    
            let generoSerie = document.querySelector(".genero");                    
            let nodo_texto_genero = document.createElement("p");                    
            nodo_texto_genero.textContent = `Género : ${serie.categorias}` ;        
            generoSerie.appendChild(nodo_texto_genero);             

            var arrayCategoria = [];

            for(let i = 0; i < serie.categorias.length; i++){     
              arrayCategoria.push(serie.categorias[i]) ;      
            };                                                                    

            let actoresSerie = document.querySelector(".actores");                  
            let nodo_texto_actores = document.createElement("a");                   
            nodo_texto_actores.setAttribute('target', `"_blank"`);                  
            nodo_texto_actores.setAttribute('href', `${serie.actores[0]}`);         
            nodo_texto_actores.textContent = `Actores : ${serie.actores[1]}` ;      
            actoresSerie.appendChild(nodo_texto_actores);                           
                                                                                    
            let sinopsisSerie = document.querySelector(".sinopsis");                
            let nodo_texto_sinopsis = document.createElement("p");                  
            nodo_texto_sinopsis.textContent = `${serie.sinopsis}` ;                 
            sinopsisSerie.appendChild(nodo_texto_sinopsis);                         
                                                                                    
            let iframeSerie = document.querySelector(".iframedatos");               
            let nodo_texto_iframe = document.createElement("iframe");               
            nodo_texto_iframe.setAttribute('src', `${serie.iframe[0]}`);            
            nodo_texto_iframe.setAttribute('title',`${serie.iframe[1]}`);           
            nodo_texto_iframe.setAttribute('frameborder',`${serie.iframe[2]}`);     
            nodo_texto_iframe.setAttribute('allow',`${serie.iframe[3]}`);           
            nodo_texto_iframe.setAttribute('referrerpolicy',`${serie.iframe[4]}`);  
            nodo_texto_iframe.textContent= `${serie.iframe[5]}` ;                   
            iframeSerie.appendChild(nodo_texto_iframe);                             
                                                                                    
            let btnComenzarSerie = document.querySelector(".btnComenzar");          
            let nodo_texto_btnComenzar = document.createElement("a");               
            nodo_texto_btnComenzar.setAttribute('target', `"_blank"`);              
            nodo_texto_btnComenzar.setAttribute('href', `${serie.linkvideo}`);      
            nodo_texto_btnComenzar.textContent = `Comenzar` ;                       
            btnComenzarSerie.appendChild(nodo_texto_btnComenzar);                   
                                                                                    
            // CARGA LAS TEMPORADAS                                    
            let temporadaSerie = document.querySelector("#tempora");                                          
            let posi = 0 ;                                                          
                                                                                    
            var arrayCapitulos = [];
                                                                                    
             for(let i = 0; i < serie.temporadas.length; i++){                                 
              let nodo_texto_temporadaSerie = document.createElement("option");     
              let posi = i + 1 ;                                                    
              nodo_texto_temporadaSerie.setAttribute('value', posi);              
              nodo_texto_temporadaSerie.textContent= posi;                          
              temporadaSerie.appendChild(nodo_texto_temporadaSerie)               
              arrayCapitulos.push(serie.temporadas[i]) ;                 
             };                                                                     
                                                                                    
        }                                                                                                                                                    
      }                                                                                    
  };

// CARGA IMAGENES AL CONTENEDOR    
const VISTAS = ["./series.html", "./peliculas.html"];                                                               
                                                                                                                    
function esPelicula(item){                                                                                          
    for(let i = 0; i < PELICULAS.length; i++){                                                                      
        if(PELICULAS[i]["img"] == item){                                                                            
            return true;                                                                                            
        }                                                                                                           
    }                                                                                                               
}                                                                                                                   
                                                                                                                    
function agregarImgAlContenedor(img){                                                                               
    const NODO_CONTENEDOR = document.querySelector(".main-carousel");                                                      
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

let contadorPeliculas = 0;                                                                                      
let contadorSeries = 0;   
let arrayImg = [];
// busca categoria seleccionada 
if (TIPO_SELECCION == 'serie'){
  for (let datos of arraySeries) {
    for(let j = 0; j < datos.categorias.length; j++){
      for(let k = 0; k < arrayCategoria.length; k++){
        if (datos.categorias[j] == arrayCategoria[k]){
            arrayImg.push(datos.img);                                                                
        }
      }
    }
  }  
}
else{
  for (let datos of arrayPeliculas) {
    for(let j = 0; j < datos.categorias.length; j++){
      for(let k = 0; k < arrayCategoria.length; k++){
        if (datos.categorias[j] == arrayCategoria[k]){
            arrayImg.push(datos.img);                                                            
        }
      }
    }
  }  
};
//elimina duplicados
let sinDuplicados = [];
 
for(let i = 0; i < arrayImg.length; i++){
  if(!sinDuplicados.includes(arrayImg[i])){
    sinDuplicados.push(arrayImg[i]);
    agregarImgAlContenedor(arrayImg[i])  
   } 
} 

// Carga capitulos de la Serie segun la temporada seleccionada
const SELECT_TEMPORADA= document.querySelector("#tempora");

SELECT_TEMPORADA.addEventListener("change", () =>{

  let capitulos = SELECT_TEMPORADA.value ;
  let capituloSerie = document.querySelector("#capitulo");  
  capituloSerie.textContent = "";
  let pos = 0;
  const comboSecundario = document.querySelector("#capitulo")

  for(let i = 0; i < arrayCapitulos[(capitulos-1)]; i++){
    pos++
    let nodo_texto_capituloSerie = document.createElement("option");      
    nodo_texto_capituloSerie.setAttribute('value', pos);               
    nodo_texto_capituloSerie.textContent= pos;                    
    capituloSerie.appendChild(nodo_texto_capituloSerie)          
  }
})

