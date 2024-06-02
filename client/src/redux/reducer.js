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
        

        case ALPHABETIC_ORDER: {
            const orderDogs = (action.payload === 'ascendent')
            ? state.dogsCopy.sort((dog1, dog2) => dog1.name.localCompare(dog2.name))
            : state.dogsCopy.sort((dog1, dog2) => dog2.name.localCompare(dog1.name));

            return {
                ...state,
                dogsCopy: orderDogs
            }
        };

        case ORDER_BY_WEIGHT: {
            const orderWeight = (action.payload === 'lighter')
            ? (state.dogsCopy.sort((dogA, dogB)=> dogA.weight.split("-")[0] - dogB.weight.split("-")[0]))
            : (state.dogsCopy.sort((dogA, dogB)=> dogB.weight.split("-")[0] - dogA.weight.split("-")[0]))

            return {
                ...state,
                dogsCopy: orderWeight
            }
        };

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