require ('dotenv').config();
const axios = require('axios');

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const { Dog, Temperament } = require('../db');

const getDogs = async () => {

    try {
        const { data } = await axios(URL);

        //Comprobar si la API devolvió datos, si no, lanzar error
        if (!data || data.length === 0) {
            throw new Error("No se encontraron perros en la API.");
        }

        const apiBreeds = data?.map((dog) => {
            return {
                id: dog?.id,
                name: dog?.name,
                weight: dog?.weight?.metric,
                height: dog?.height?.metric,
                life_span: dog?.life_span,
                temperament: dog?.temperament,
                image: dog?.image?.url,
                created: false,
            }
        });

        const DB_breeds = await Dog.findAll ({
            include: {
                model: Temperament, as:"temperament"}})
        
        // Comprobar si la base de datos devolvió datos, si no, lanzar error
        if (!DB_breeds && DB_breeds.length === 0) {
            throw new Error("No se encontraron perros en la base de datos.");
        }

        const DB_dog = DB_breeds.map((dog) => {
            const breedTempDB = dog.temperament.map(temp => temp.name);
            return {
                id: dog.id,
                name: dog.name,
                weight: dog.weight,
                height: dog.height,
                life_span: dog.life_span,
                temperament: breedTempDB.join(", "),
                image: dog.image,
                created: true,
            }
        })
        // console.log(...DB_dog, ...apiBreeds)
        return[...DB_dog, ...apiBreeds];
    } catch (error) {
        // console.error("Error al obtener datos de The Dog API:", error);
        throw new Error(error.message); 
    }
}
getDogs();

module.exports = {
    getDogs
}