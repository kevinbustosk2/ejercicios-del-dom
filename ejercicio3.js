let elemento = document.getElementsByTagName('div')[0];

elemento.style.width = '300px';
elemento.style.height = '200px';
elemento.style.backgroundColor = 'purple';

console.log('Las propiedades de estilo del elemento son:');
for(let i = 0; i < elemento.style.length; i++) {
    console.log(`${elemento.style[i]}: ${elemento.style.getPropertyValue(elemento.style[i])}`);
}

elemento.classList.add('square')
console.log('Clases asignadas al elemento <div>: ' + elemento.classList)

const inversion = setInterval(invertirClase, 1000);

function invertirClase() {
    elemento.classList.toggle('square');
    console.log('Clases asignadas elemento: ' + elemento.classList);
}