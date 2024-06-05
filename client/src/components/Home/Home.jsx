import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, getTemperaments, tempAllNames, nameByOrigin, alphabeticOrder, orderByWeight } from '../../redux/actions/actions';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../Cards/Cards';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Navbar from './NavBar/NavBar';
import Pagination from './Pagination/Pagination';
import style from './Home.module.css';
import generatePawPrints from '../../utils/generatePawPrints';

const Home = () => {
    const dispatch = useDispatch();

    //Accedo al estado global de la copia de dogs donde estanr todas las razas de perros
    const dogs = useSelector((state) => state.dogsCopy);
    const { temperamentsCopy } = useSelector((state) => state);

    //Loading State
    const [loading, setLoading] = useState(false);

    //Estados de paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [dogsPerPage] = useState(8); //Cantidad de elementos que se renderizaran por pagina
    const [showFilters, setShowFilters] = useState(false);

    useEffect(() => {
        const getAllDogs = async () => {
            setLoading(true);
            await dispatch(getDogs());
            await dispatch(getTemperaments());
            setTimeout(() => {
                setLoading(false);
            }, 2000) //Simulo 2 segundos de espera mientras muestro la pagina de carga
        };

        getAllDogs();
    }, [dispatch]);

    //Obtener los perros actuales
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);
   

    //Cambiar la pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    //console.log(dogs); // Esto debería mostrar los datos obtenidos en la consola

    const handleAllTemps = (e) => {
        dispatch(tempAllNames(e.target.value));
        setCurrentPage(1);
    };

    const handleDogOrigin = (e) => {
        dispatch(nameByOrigin(e.target.value));
        setCurrentPage(1);
    };

    const handleAlphabeticOrder = (e) => {
        dispatch(alphabeticOrder(e.target.value));
        setCurrentPage(1);
    };

    const handleOrderWeight = (e) => {
        dispatch(orderByWeight(e.target.value));
        setCurrentPage(1);
    };

    const handleClearFilters = () => {
        dispatch(getDogs());
        setCurrentPage(1);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    // const generatePawPrints = (count) => {
    //     const pawPrints = [];
    //     const gridSize = Math.ceil(Math.sqrt(count));
    //     const cellSize = 100 / gridSize;
    //     const margin = cellSize * 0.3; // Margen de seguridad para evitar superposición
    
    //     for (let i = 0; i < count; i++) {
    //         const row = Math.floor(i / gridSize);
    //         const col = i % gridSize;
    
    //         // Centro de la celda con variación dentro del margen
    //         const top = row * cellSize + (cellSize / 2) + (Math.random() * margin - margin / 2);
    //         const left = col * cellSize + (cellSize / 2) + (Math.random() * margin - margin / 2);
    
    //         pawPrints.push(
    //             <div
    //                 key={i}
    //                 className={style.pawPrint}
    //                 style={{
    //                     top: `${top}%`,
    //                     left: `${left}%`,
    //                 }}
    //             />
    //         );
    //     }
    
    //     return pawPrints;
    // }

    const pawPrintsData = generatePawPrints(200);

    if(loading) {
        return <LoadingSpinner />
    }

    return (
        <div className={style.homeContainer}>
             {pawPrintsData.map((position, index) => (
                <div
                    key={index}
                    className={style.pawPrint}
                    style={{
                        top: `${position.top}%`,
                        left: `${position.left}%`,
                        position: 'absolute'
                    }}
                />
            ))}
            <Navbar />
            <SearchBar setCurrentPage={setCurrentPage} className={style.searchBar} />
            <button onClick={toggleFilters} className={style.toggleFiltersButton}>
                {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            {showFilters && (
                <div className={style.filtersContainer}>
                    <select onChange={handleAllTemps}>
                        <option value=''>Temperaments: </option>
                        {temperamentsCopy.map((temp, index) => (
                            <option value={temp.name} key={index}>
                                {temp.name}
                            </option>
                        ))}
                    </select>
                    <select onChange={handleDogOrigin}>
                        <option value='api'>Origin: Api</option>
                        <option value='db'>Origin: DB</option>
                    </select>
                    <select onChange={handleAlphabeticOrder}>
                        <option value='ascendent'>from A to Z</option>
                        <option value='descendent'>from Z to A</option>
                    </select>
                    <select onChange={handleOrderWeight}>
                        <option value='lighter'>Lighter</option>
                        <option value='heavier'>Heavier</option>
                    </select>
                    <button onClick={handleClearFilters} className={style.clearButton}>Clear Filters</button>
                </div>
            )}
            <Cards dogs={currentDogs} className={style.cardsContainer} />
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(dogs.length / dogsPerPage)}
                onPageChange={paginate}
                className={style.paginationContainer}
            />
        </div>
    );
};

export default Home;