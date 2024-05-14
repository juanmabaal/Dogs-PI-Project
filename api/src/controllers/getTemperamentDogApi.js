require ('dotenv').config();
const axios = require('axios');

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getTemperamentDogApi = async() => {

    try {
        const { data } = await axios.get(URL);
        const temperamentDogApi = data?.map((dog) => dog?.temperament);
        console.log(temperamentDogApi)
    } catch (error) {
        console.error("Error al obtener datos de temperamentos de los perros:", error);
    }
}

getTemperamentDogApi();