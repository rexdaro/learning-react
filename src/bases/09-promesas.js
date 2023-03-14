import { getHeroeById } from "./08-imp-exp";

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {

//         // tarea
//         // importar el:

//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         reject('no se pudo encontrar el heroe');
//     }, 2000);


// } );

// .then(() => {
//     console.log('then de la promesa', heroe)
// })

// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
return new Promise( (resolve, reject) => {

    setTimeout(() => {

        //tarea
        //importar el:

        const p1 = getHeroeById(id);
        if(p1){
            resolve(p1);
        }
        else{
            reject('no se pudo encontrar el heroe');
        }
        //reject('no se pudo encontrar el heroe');
        }, 2000);


    });

  

}

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.warn);