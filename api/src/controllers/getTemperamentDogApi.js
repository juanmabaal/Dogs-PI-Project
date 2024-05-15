require ('dotenv').config();
const axios = require('axios');
const { Temperament } = require("../db");

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getTemperamentDogApi = async() => {

    try {
        const { data } = await axios.get(URL);
        const temperamentDogApi = data?.map((dog) => dog?.temperament);
        
        let allTemps = temperamentDogApi.toString().split(",");
        
        allTemps = allTemps.filter((temp) => temp !== ""); //Se obtienen los temperamentos individuales, eliminando las cadenas vacias ""

        const tempsFiltered = allTemps.filter((temp, index) => {
            return allTemps.indexOf(temp) === index;
        }) //Si el índice de un temperamento es igual al índice de su primera aparición en el array, significa que es único y se conserva en el array tempsFiltered

        
        const temperamentObject = tempsFiltered.map((temp) => { //Se convierten los temperamentos en un objeto y luego pasarlos al modelo
            return {
                name: temp
            };
        });

        temperamentObject.forEach(temp => {
            if(temp) Temperament.bulkCreate({ name: temp })
        });

        return temperamentObject;

    } catch (error) {
        console.error("Error al obtener datos de temperamentos de los perros:", error);
    }
}

module.exports = {
    getTemperamentDogApi
};
