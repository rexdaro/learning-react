

const personajes = ['Goku', 'Vegeta', 'Trunks'];

// const [p1, p2, p3] = personajes;

// console.log(p3);
// console.log(p2);
// console.log(p1);


const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea

const useState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo')
    }];
}

const [, funcion] = useState('Goku');




funcion();

