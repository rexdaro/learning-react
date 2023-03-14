
import heroes, {owners} from "../data/heroes";




// console.log(owners);


// const  getHeroeById = (id) => {
    
//     return heroes.find( (heroe) => {
//         if ( heroe.id === id) {
//             return true
//         }
//     } );
// };

const  getHeroeById = (id) => {
    
    return heroes.find( (heroe) => {return (heroe.id === id)} );
};

// console.log(getHeroeById(3));


const getHeroesByOwner =  (owner) => {
    
    return heroes.filter( (heroe) => {return (heroe.owner === owner)} );
};

// console.log(getHeroesByOwner('DC'));

// console.log(getHeroesByOwner('Marvel'));


export {
    getHeroeById,
    getHeroesByOwner
};