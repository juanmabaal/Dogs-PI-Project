
const { getDogs } = require('./getDogs');


const getDogById =  async (breedId) => {
    try {
        const allDogs = await getDogs();
        
        const dogById = allDogs.find((dog) => dog.id === parseInt(breedId, 10));

        // Verificar si se encontró el perro con el ID proporcionado
        if (!dogById) {
            throw new Error(`No se encontró un perro con el ID ${breedId}.`);
        }

        console.log(dogById); // Loguear el perro encontrado para depuración

        return dogById;
    } catch (error) {
        // console.error("Error al obtener el perro por el ID", error)
        throw new Error(error.message);
    }

}

//getDogById('222'); //Esto deberia retornar la raza de perro con un id especifico


module.exports = {
    getDogById
};