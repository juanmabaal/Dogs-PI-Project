const { postDogs } = require('../controllers/postDogs');

const postDogHandler = async (req, res) => {
    const { name, height, weight, life_span, image, temperaments } = req.body;
    try {
        if (!name || !height || !weight || !temperaments || temperaments.length === 0) {
            return res.status(400).json({ message: "Faltan datos obligatorios para crear el perro" });
        }
        const newDog = await postDogs(name, height, weight, life_span, image, temperaments);

        return res.status(200).json(newDog);
        
    } catch (error) {
        return res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }

};

module.exports = {
    postDogHandler
};