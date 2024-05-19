const { getTemperamentDogApi } = require('../controllers/getTemperamentDogApi');

const getTemperamentsHandler = async (req, res) => {
    try {
        const getTemperament = await getTemperamentDogApi();
    
        res.status(200).json(getTemperament);
        
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
}

module.exports = {
    getTemperamentsHandler
};