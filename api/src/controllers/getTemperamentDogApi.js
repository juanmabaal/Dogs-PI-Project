require ('dotenv').config();
const axios = require('axios');
const { Temperament } = require("../db");

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getTemperamentDogApi = async() => {

    try {
        const { data } = await axios.get(URL);

        if (!data) throw new Error("No se recibieron datos desde la API.");

        const temperamentDogApi = data.map((dog) => dog.temperament).filter(Boolean); //Filtrar Temperamentos Vacíos: Utilizamos .filter(Boolean) para eliminar entradas undefined o null
        
        let allTemps = temperamentDogApi.toString().split(",");
        
        allTemps = allTemps.map(temp => temp.trim()).filter(temp => temp !== ""); //Se obtienen los temperamentos individuales, eliminando las cadenas vacias "", trim para que elimine los espacios en blanco de los temperamentos


        const tempsFiltered = [...new Set(allTemps)]; // Filtrar únicos utilizando Set

        if (tempsFiltered.length === 0) throw new Error("No se encontraron temperamentos válidos.");
        

        const temperamentObject = tempsFiltered.map((temp) => { //Se convierten los temperamentos en un objeto y luego pasarlos al modelo
            return {
                name: temp
            };
        });
        await Temperament.bulkCreate(temperamentObject, { ignoreDuplicates: true }); //Evitamos duplicados


        return temperamentObject;

    } catch (error) {
        // console.error("Error al obtener datos de temperamentos de los perros:", error);
        throw new Error(error.message); // Re-lanzar el error para que pueda ser manejado externamente si es necesario
    }
}

module.exports = {
    getTemperamentDogApi
};
