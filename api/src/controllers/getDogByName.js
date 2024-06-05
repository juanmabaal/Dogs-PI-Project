
const { getDogs } = require('./getDogs');

const getDogsByName =  async (bredName) => {
    try {
        const allDogs = await getDogs();
        
        const dogByName = allDogs.filter((dog) => dog.name.toLowerCase().includes(bredName.toLowerCase()));

        // Verificar si se encontraron perros con el nombre proporcionado
        if (dogByName.length === 0) {
            throw new Error(`No se encontraron perros con el nombre que incluya '${bredName}'.`);
        };

        
        return dogByName;
    } catch (error) {
        // Loguear y lanzar el error para que pueda ser manejado por un middleware de errores
        // console.error("Error al obtener el perro por el Nombre", error);
        throw new Error(error.message);
    }

}

//getDogsByName('Wirehaired Vizsla'); //Esto deberia retornar la raza de perro con un nombre especifico

module.exports = {
    getDogsByName
};