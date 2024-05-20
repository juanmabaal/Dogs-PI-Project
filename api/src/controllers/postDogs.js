const { Dog, Temperament } = require('../db');

const postDogs = async (name, height, weight, life_span, image, temperaments) => {
    // console.log(name, image, height, weight, life_span, temperaments);
    try {
        //Crea o encuentra el nuevo perro
    const [dogCreated, created] = await Dog.findOrCreate({
        where: { name, weight, height, image, life_span },
        include: [{ model: Temperament, as: 'temperament'}]
    });

    //Encuentra o crea los temperamentos asociados
    const temperamentInstances = await Promise.all( 
        temperaments.map( async (temp) => {
            const [temperamentInstance, created] = await Temperament.findOrCreate({
                where: {name: temp}
            });
            return temperamentInstance;
        })
    )

    // Asociar los temperamentos con el perro creado/encontrado
    await dogCreated.setTemperament(temperamentInstances); //Método: setTemperament es un método de asociación generado por Sequelize

    // Retornar el perro con los temperamentos asociados
    const dogWithTemperament = await Dog.findByPk(dogCreated.id,{
            include: [{ 
                model: Temperament, 
                as: 'temperament',
                through: { attributes: [] } // Excluir atributos de la tabla intermedia
            }]
    });
    // console.log(dogWithTemperament)
    return dogWithTemperament;

    } catch (error) {
        throw new Error(error.message); 
    }
    
};

module.exports = {
    postDogs,
};
