const saludar = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar('Goku'));



const getUsuarioActivo = (nombre) => ({    
        uid:'ABC573',
        username: nombre,    
});

console.log(getUsuarioActivo('Manu'));