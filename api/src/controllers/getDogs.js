require ('dotenv').config();
const axios = require('axios');

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;
const { Dog, Temperament } = require('../db');

const getDogs = async () => {

    try {
        const { data } = await axios(URL);

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
                model: Temperament}})
        
        const DB_dog = DB_breeds.map((dog) => {
            const breedTempDB = Dog.Temperament.map(temp => temp.name);
            return {
                id: dog.id,
                name: dog.name,
                weight: dog.weight,
                height: dog.height,
                life_span: dog.life_span,
                temperament: dog.tetmperamen,
                image: dog.image,
                created: true,
                temperament: breedTempDB.join(", ")
            }
        })
        
        return[...DB_dog, ...apiBreeds];
    } catch (error) {
        console.error("Error al obtener datos de The Dog API:", error);
    }
}
getDogs();