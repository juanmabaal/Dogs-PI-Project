const { getDogs } = require('../controllers/getDogs');


const dogsHandler = async (req, res) => {
    try {
        const dogs = await getDogs();

        if (!dogs || dogs.length === 0) {
            return res.status(404).json({ message: "No se encontraron perros." });
        }
        return res.status(200).json(dogs);
    } catch (error) {
        return res.status(500).send("Se tiene un error al acceder a los datos");
    }

}

module.exports= {
    dogsHandler
};