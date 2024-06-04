const { getDogsByName } = require('../controllers/getDogByName');

const dogsByNameHandler = async(req, res) => {
    try {
        const { name } = req.query;


        if (!name) {
            return res.status(400).json({ error: 'Name query parameter is required' });
        }

        const getDogByName = await getDogsByName(name);

        if (getDogByName.length === 0) {
            return res.status(404).json({ error: `No se encontraron perros con el nombre que incluya '${name}'.` });
        }

        return res.status(200).json(getDogByName);

    } catch (error) {
        return res.status(404).json({ message: "Error interno del servidor", error: error.message });
    }
}

module.exports = {
    dogsByNameHandler
};