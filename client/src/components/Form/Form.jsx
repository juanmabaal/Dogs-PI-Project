import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import validate from "./validate";
import { postDog, getTemperaments } from "../../redux/actions/actions";
import style from './Form.module.css';


const Form = () => {
    
    const [createDataForm, setCreateDataForm] = useState({
        name: "",
        heightMin: "",
        heightMax: "",
        weightMin: "",
        weightMax: "",
        life_span: "",
        temperament: [],
        newTemperament: '',
        image: ""
    });

    const [errors, setErrors] = useState({});

    const { temperamentsCopy } = useSelector((state) => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);
    
    // console.log(temperamentsCopy);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateDataForm((prevData) => {
            const newData = { ...prevData, [name]: value };
            setErrors(validate(newData));
            return newData;
        });
    };

    const handleTemperamentChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setCreateDataForm((prevData) => {
            // Copiar el estado actual de los temperamentos
            const newTemperament = [...prevData.temperament];
            

            //Para evaluar cuando tengo una solacion seleccionada
            if(selectedOptions.length === 0){
                newTemperament.splice(0, 1);
            }
            // Agregar o quitar cada opción seleccionada
            selectedOptions.forEach(option => {
                // console.log(`selected Option: ${selectedOptions}`)
                const index = newTemperament.indexOf(option);
                // console.log(index)
                if (index > -1) {
                    // Si la opción ya está seleccionada, quítala
                    newTemperament.splice(index, 1);
                } else {
                    // Si la opción no está seleccionada, agrégala
                    newTemperament.push(option);
                }
                console.log(`new Temperament: ${newTemperament}`)
            });
            
            const newData = { ...prevData, temperament: newTemperament };
            setErrors(validate(newData));
            return newData;
        });
    };

    const handleNewTemperamentChange = (e) => {
        setCreateDataForm({
            ...createDataForm,
            newTemperament: e.target.value
        });
    };

    const addNewTemperamentChange = () => {
        if (createDataForm.newTemperament && !createDataForm.temperament.includes(createDataForm.newTemperament)) {
            setCreateDataForm((prevData) => {
                const newData = { ...prevData, temperament: [...prevData.temperament, createDataForm.newTemperament], newTemperament: '' };
                setErrors(validate(newData));
                return newData;
            });
        }
    };

    // console.log(`Nueva temperamento: ${createDataForm.newTemperament}`);
    // console.log(`Temperamentos: ${createDataForm.temperament}`);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateErrors = validate(createDataForm);
        setErrors(validateErrors);
        if (Object.keys(validateErrors).length === 0) { // Verifica si no hay errores
            dispatch(
                postDog({
                    name: createDataForm.name,
                    height: `${createDataForm.heightMin} - ${createDataForm.heightMax}`,
                    weight: `${createDataForm.weightMin} - ${createDataForm.weightMax}`,
                    life_span: createDataForm.life_span,
                    temperaments: createDataForm.temperament,
                    image: createDataForm.image
                })
            );
            setCreateDataForm({
                name: "",
                heightMin: "",
                heightMax: "",
                weightMin: "",
                weightMax: "",
                life_span: "",
                temperament: [],
                newTemperament: '',
                image: ""
            });
        }
        
    };
     return (
        <div className={style.formContainer}>
            <h2 className={style.formTitle}>Create a New Dog Breed</h2>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.formGroup}>
                    <label>Breed Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={createDataForm.name}
                        onChange={handleChange}
                        className={style.formInput}
                    />
                    {errors.name && <p className={style.error}>{errors.name}</p>}
                </div>
                <div className={style.formGroup}>
                    <label>Min Height (cm):</label>
                    <input
                        type="number"
                        name="heightMin"
                        value={createDataForm.heightMin}
                        onChange={handleChange}
                        className={style.formInput}
                    />
                    {errors.heightMin && <p className={style.error}>{errors.heightMin}</p>}
                    <label>Max Height (cm):</label>
                    <input
                        type="number"
                        name="heightMax"
                        value={createDataForm.heightMax}
                        onChange={handleChange}
                        className={style.formInput}
                    />
                    {errors.heightMax && <p className={style.error}>{errors.heightMax}</p>}
                </div>
                <div className={style.formGroup}>
                    <label>Weight Min (kg):</label>
                    <input
                        type="number"
                        name="weightMin"
                        value={createDataForm.weightMin}
                        onChange={handleChange}
                        className={style.formInput}
                    />
                    {errors.weightMin && <p className={style.error}>{errors.weightMin}</p>}
                    <label>Weight Max (kg):</label>
                    <input
                        type="number"
                        name="weightMax"
                        value={createDataForm.weightMax}
                        onChange={handleChange}
                        className={style.formInput}
                    />
                    {errors.weightMax && <p className={style.error}>{errors.weightMax}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="life_span">Life Span (años):</label>
                    <div className={style.radioGroup}>
                        <label>
                            1-5
                            <input
                                type="radio"
                                value="1-5"
                                name="life_span"
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            5-10
                            <input
                                type="radio"
                                value="5-10"
                                name="life_span"
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            10-15
                            <input
                                type="radio"
                                value="10-15"
                                name="life_span"
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            +15
                            <input
                                type="radio"
                                value="+15"
                                name="life_span"
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                    {errors.life_span && <p className={style.error}>{errors.life_span}</p>}
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="temperament">Temperament:</label>
                    <select
                        multiple
                        name="temperament"
                        value={createDataForm.temperament}
                        onChange={handleTemperamentChange}
                        className={style.formSelect}
                    >
                        {temperamentsCopy.map((temp) => (
                            <option key={temp.id} value={temp.name}>
                                {temp.name}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={createDataForm.newTemperament}
                        placeholder="Add new temperament"
                        onChange={handleNewTemperamentChange}
                        className={style.formInput}
                    />
                    <button type="button" onClick={addNewTemperamentChange} className={style.addButton}>
                        Add Temperament
                    </button>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="image">Imagen:</label>
                    <input
                        type="url"
                        name="image"
                        value={createDataForm.image}
                        onChange={handleChange}
                        className={style.formInput}
                        placeholder="Insert URL please"
                    />
                    {errors.image && <p className={style.error}>{errors.image}</p>}
                    {createDataForm.image && (
                        <img src={createDataForm.image} alt={createDataForm.name} className={style.previewImage} />
                    )}
                </div>
                <button
                    type="submit"
                    className={style.submitButton}
                    disabled={
                        errors.name ||
                        errors.heightMin ||
                        errors.heightMax ||
                        errors.weightMin ||
                        errors.weightMax ||
                        errors.temperament ||
                        errors.life_span ||
                        errors.image
                    }
                >
                    Create Breed
                </button>
            </form>
            <Link to='/home'>
                <button className={style.backButton}>Back Home</button>
            </Link>
        </div>
    );
};

export default Form;