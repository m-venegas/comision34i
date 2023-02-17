let alumnos = [
    "Masiel Venegas",
    "Ena Peniche",
    "Isabella Lizarazo",
    "Vanesa Barrios",
    "Angela Gonzalez",
    "Pedro Mendoza",
    "Sofia Ramos",
];

let tarjeta = document.querySelector(".card-body");
//aqui voy a cargar mi lista de alumnos

function listarAlumnos (array, contenedor){
    array.forEach(function (alumno){
        let parrafo = document.createElement ("p")
        parrafo.innerText=alumno
        return contenedor.appendChild(parrafo)
        
    });
}

listarAlumnos(alumnos,tarjeta);