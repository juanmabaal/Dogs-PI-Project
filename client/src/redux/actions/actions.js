import axios from 'axios';
import {
    GET_DOGS,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    TEMP_ALL_NAMES,
    NAME_BY_ORIGIN,
    ALPHABETIC_ORDER,
    ORDER_BY_WEIGHT,
    POST_DOG
} from './actions-type';

const URL = 'dogs-pi-project-dqbivxine-juan-balagueras-projects.vercel.app';

// const URL: 'http://localhost:3001';

export const getDogs = () => {
    const endpoint = `${URL}/dogs`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
           
            return dispatch ({
                type: GET_DOGS,
                payload: data
            })
        } catch (error) {
            return error.message;
        }
    }
};

export const getDogByName = (name) => {
    const endpoint = `${URL}/name?name=${name}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);
            if(data.length === 0) return 'No existe una raza de perro con ese nombre';

            return dispatch ({
                type: GET_DOG_BY_NAME,
                payload: data
            })
        } catch (error) {
            return error.message;
        }
    }
};

export const getTemperaments = () => {
    const endpoint = `${URL}/temperaments`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endpoint);

            return dispatch ({
                type: GET_TEMPERAMENTS,
                payload: data
            })
        } catch (error) {
            return error.message;
        }
    }
};

export const tempAllNames = (temp) => {
    return  ({
        type: TEMP_ALL_NAMES,
        payload: temp
    }) 
};

export const nameByOrigin = (origin) => {
    return  ({
        type: NAME_BY_ORIGIN,
        payload: origin
    }) 
};

export const alphabeticOrder = (order) => {
    return  ({
        type: ALPHABETIC_ORDER,
        payload: order
    }) 
};

export const orderByWeight = (orderWeight) => {
    return  ({
        type: ORDER_BY_WEIGHT,
        payload: orderWeight
    }) 
};

export const postDog = (request) => {
    const endpoint = '${URL}/dogs';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, request);
            
            alert("Creado con exito");
            return dispatch ({
                type: POST_DOG,
                payload: data
            })
        } catch (error) {
            console.error(error)
            return alert("No se pudo crear correctamente")
        }
    }
}