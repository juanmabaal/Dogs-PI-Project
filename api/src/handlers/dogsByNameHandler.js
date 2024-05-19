const { getDogsByName } = require('../controllers/getDogByName');

const dogsByNameHandler = async(req, res) => {
    try {
        const { name } = req.query;

        const getDogByName = await getDogsByName(name);

        if(!name) throw Error(`No se encontro la raza de perro por ${name}`);

        return res.status(200).json(getDogByName);

    } catch (error) {
        return res.status(404).json({ message: "Error interno del servidor", error: error.message });
    }
}

module.exports = {
    dogsByNameHandler
};