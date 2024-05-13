
const { getDogs } = require('./getDogs');

const { Dog, Temperament } = require('../db');

const getDogById =  async (breedId) => {
    try {
        const allDogs = await getDogs();
        
        const dogById = allDogs.find((dog) => dog.id === breedId);
        console.log(dogById);
        return dogById;
    } catch (error) {
        console.error("Error al obtener el perro por el ID", error)
    }

}

// getDogById(259); //Esto deberia retornar la raza de perro con un id especifico

module.exports = {
    getDogById
};

