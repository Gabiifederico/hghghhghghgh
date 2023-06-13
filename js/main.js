// console.log(document.parrafo)

// const contenido = document.getElementById("titulo")

// const parrafos = document.getElementsByClassName("parrafo")

const contenido = document.querySelector("#contenido")


const parrafos = document.querySelectorAll(".parrafo")



// console.log(parrafos)

// parrafos.forEach (parrafo=> console.log(parrafo))

// console.log(parrafos[0])


console.log (contenido.classlist)

contenido.classList.add("evaluacion")

// contenido.classList.remove("evaluacion")


// contenido.className = "prueba"
// console.log(contenido.classList)

console.log(contenido.innerHTML)

// console.log(contenido.innerText)

// parrafos[0].innerText ="hola <a href='#'> esto es un enlace </a>"

// parrafos[0].innerHTML = "hola <a href='#'> esto es un enlace </a>"

// parrafos[0].remove()

const productos = ["sillon","silla","mesa","ventana","puerta","cama"];

let lista = document.createElement("ul")

lista.classList.add("lista")
// lista.innerHTML = "<li>class='lista-item'>" + productos[0]+"</li>";

// lista.innerHTML = "<li>class='lista-item'>" + productos[1]+"</li>";

// lista.innerHTML = "<li class='lista-item'>" + productos[1]+"</li>";

// lista.innerHTML += `<li class="lista-item" ${productos[2]}</li>`;


// lista.innerHTML += `<p>este es el item que falta o 4: ${productos[3]}</p>`

for (producto of productos){
    lista.innerHTML += `<li class="lista-item">${producto} </li>`
}
contenido.append(lista);
