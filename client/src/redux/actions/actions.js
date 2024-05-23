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

export const getDogs = () => {
    const endpoint = 'http://localhost:3001/dogs';
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
    const endpoint = `http://localhost:3001/name?name=${name}`;
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
    const endpoint = `http://localhost:3001/temperaments`;
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

export const postDog = () => {
    const endpoint = 'http://localhost:3001/dogs';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint);
                alert("Creado con exito");
            return dispatch ({
                type: POST_DOG,
                payload: data
            })
        } catch (error) {
            return alert("No se pudo crear correctamente")
        }
    }
}