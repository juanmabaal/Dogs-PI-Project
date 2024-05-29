import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getTemperaments } from '../../redux/actions/actions';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../Cards/Cards';
import Pagination from './Pagination/Pagination';

const Home = () => {
    const dispatch = useDispatch();

    //Accedo al estado global de la copia de dogs donde estanr todas las razas de perros
    const dogs = useSelector((state) => state.dogsCopy);
    const { temperaments } = useSelector((state) => state);

    //Loading State
    const [loading, setLoading] = useState(false);

    //Estados de paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8); //Cantidad de elementos que se renderizaran por pagina

    useEffect(() => {
        const getAllDogs = async () => {
            setLoading(true);
            dispatch(getDogs());
            dispatch(getTemperaments());
            setLoading(false);
        };

        getAllDogs();
    }, [dispatch]);

    //Obtener los perros actuales
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
   

    //Cambiar la pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // console.log(temperaments)
    // console.log(dogs); // Esto debería mostrar los datos obtenidos en la consola
    return(
        <>
            <SearchBar />
            <h1>Home Page</h1>
            <Cards dogs = {currentDogs}/>
            <Pagination 
                currentPage={currentPage}
                totalPages = {Math.ceil(dogs.length / dogsPerPage)}
                onPageChange={paginate}
            />
        </>
    );
};

export default Home;