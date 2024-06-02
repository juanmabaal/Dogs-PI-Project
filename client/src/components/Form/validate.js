
const validate = (values) => {
    let errors = {};

    //validacion de name 
    if(!values.name.length || values.name.length > 20) {
        errors.name = "Name must be  less than 20 characters and cannot be null";
    }
    
    //validacion del campo heightMin
    if (!(/^[0-9]+$/).test(values.heightMin) || values.heightMin > values.heightMax || isNaN(values.heightMin)) {
        errors.heightMin = "Min height must be a number and cannot exceed maximum height";
    }

    //validacion del campo heightMax
    if (!(/^[0-9]+$/).test(values.heightMax) || values.heightMax < values.heightMin || isNaN(values.heightMax)) {
        errors.heightMax = "Max height must be a number and cannot be less than min height";
    }

     // Validación del campo 'weightMin'
     if (!(/^[0-9]+$/).test(values.weightMin) || values.weightMin > values.weightMax || isNaN(values.weightMin)) {
        errors.weightMin = "Min weight must be a number and cannot exceed maximum weight";
    }

    // Validación del campo 'weightMax'
    if (!(/^[0-9]+$/).test(values.weightMax) || values.weightMax < values.weightMin || isNaN(values.weightMax)) {
        errors.weightMax = "Max weight must be a number and cannot be less than min weight";
    }

    //Validacion de 'life_span'
    if(!values.life_span) {
        errors.life_span = "An option must be chosen";

    }

    //Validacion del campo 'temperament'
    if(!values.temperament.length) {
        errors.temperament = "An option must be chosen or added"
    }

    // Validación del campo 'image'
    if (!(/^(http|https):\/\/[a-zA-Z0-9-.]+\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=%]*\.(jpg|jpeg|gif|png)(\?.*)?$/).test(values.image)) {
        errors.image = "Invalid image URL";
    }

    return errors;
}

export default validate;