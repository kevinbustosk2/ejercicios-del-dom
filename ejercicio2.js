const titulo = document.getElementById("titulo");
console.log("Texto original del título:", titulo.textContent);

titulo.textContent = "Nuevo Título";
console.log("Texto actualizado del título:", titulo.textContent);

titulo.innerHTML = "<p>Este es un párrafo en lugar del título.</p>";
console.log("El título ha sido reemplazado por un párrafo.");

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un párrafo adicional.";
document.body.appendChild(nuevoParrafo);
console.log("Se ha agregado un nuevo párrafo al body.");