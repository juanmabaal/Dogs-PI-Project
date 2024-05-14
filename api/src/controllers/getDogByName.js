
const { getDogs } = require('./getDogs');


const getDogByName =  async (bredName) => {
    try {
        const allDogs = await getDogs();
        
        const dogByName = allDogs.filter((dog) => dog.name.toLowerCase().includes(bredName.toLowerCase()));
        console.log(dogByName);
        return dogByName;
    } catch (error) {
        console.error("Error al obtener el perro por el Nombre", error)
    }

}

 getDogByName('Wirehaired Vizsla'); //Esto deberia retornar la raza de perro con un nombre especifico

module.exports = {
    getDogByName
};