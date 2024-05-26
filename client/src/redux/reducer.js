import {
    GET_DOGS,
    GET_DOG_BY_NAME,
    GET_TEMPERAMENTS,
    TEMP_ALL_NAMES,
    NAME_BY_ORIGIN,
    ALPHABETIC_ORDER,
    ORDER_BY_WEIGHT,
    POST_DOG
} from './actions/actions-type';

const initialState = {
    dogs: [],
    dogsCopy: [],
    temperaments: [],
    temperamentsCopy: []
//Se crean copias para mantener el principio de inmutabilidad del estado, filtrados y ordenamiento
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsCopy: action.payload
            };
        
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogsCopy: action.payload
            };

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temperaments: action.payload,
                temperamentsCopy: action.payload
            };

        case TEMP_ALL_NAMES:
            return {
                ...state,
                dogsCopy: [...state.dogs].filter((dog) => dog.temperament?.includes(action.payload))
            };

        case NAME_BY_ORIGIN: {
            const dogByOrigin = (action.payload === 'api')
                ? [...state.dogs].filter((dog) => dog.created === false)
                : [...state.dogs].filter((dog) => dog.created === true);
            return {
                ...state,
                dogsCopy: dogByOrigin
            };
        }
        //Aqui van los dos casos faltantes para el filtrado

        case POST_DOG:
            return {
                ...state,
                dogs: [...state.dogs, action.payload], // Se añade el nuevo perro a la copia original
                dogsCopy: [...state.dogsCopy, action.payload]
            };

        default:
            return state;
    }
};

export default rootReducer;