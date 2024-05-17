const { getDogById } = require('../controllers/getDogById');


const dogByIdHandler = async (req, res) => {
    const { breedId } = req.params;
    console.log('breed ID: ', breedId); // Esto debería registrar el ID

    try {
        if (!breedId) {
            return res.status(400).json({ message: "ID no proporcionado" });
        }
        const dogById = await getDogById(breedId);

        if (!dogById) {
            return res.status(404).json({ message: `No se encontró un perro con el ID ${breedId}` });
        }

        return res.status(200).json(dogById);
    } catch (error) {
        console.error('Error al obtener el perro por el ID:', error); // Loguea el error completo
        return res.status(500).json({ message: "Error interno del servidor", error: error.message });
    }
}

module.exports= {
    dogByIdHandler
};