require ('dotenv').config();
const axios = require('axios');

const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

const getDogs = async () => {

    try {
        const { data } = await axios(URL);
        console.log("Datos recibidos de The Dog API:", data);
    } catch (error) {
        console.error("Error al obtener datos de The Dog API:", error);
    }
}
getDogs();