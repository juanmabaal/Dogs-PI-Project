import  { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from '../../redux/actions/actions';
import SearchBar from '../searchBar/SearchBar';
import Cards from '../Cards/Cards';

const Home = () => {
    const dispatch = useDispatch();
    const dogs = useSelector((state) => state.dogsCopy);

    useEffect(() => {
        const getAllDogs = async () => {
            await dispatch(getDogs());
        };

        getAllDogs();
    }, [dispatch]);
    
    // console.log(dogs); // Esto debería mostrar los datos obtenidos en la consola
    return(
        <>
            <SearchBar />
            <Cards dogs = {dogs}/>
            <h1>Home Page</h1>
        </>
    );
};

export default Home;