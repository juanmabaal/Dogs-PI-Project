const { Dog, Temperament } = require('../db');
const { getDogs } = require('./getDogs');


const getDogById =  async (breedId) => {
    try {
        
        const allDogs = await getDogs();
        let dogById;
        
        if(breedId.includes('-')){

             dogById = allDogs.find((dog) => dog.id === breedId);
        }else {
             dogById = allDogs.find((dog) => dog.id === parseInt(breedId,10));
        };

        
        if (!dogById) {
            throw new Error(`No se encontró un perro con el ID ${breedId}.`);
        }

        // console.log(`breed ID: ${breedId}`); // Loguear el perro encontrado para depuración

        return dogById;
    } catch (error) {
        
        throw new Error(error.message);
    }

}




module.exports = {
    getDogById
};