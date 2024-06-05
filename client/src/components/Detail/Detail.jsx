import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import axios from "axios";
import style from './Detail.module.css';
import LoadingSpinner from '../Loading/LoadingSpinner';

const Detail = () => {
    const { idBreed } = useParams();
    const [dogDetail, setDogDetail] =useState({});
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
   

    useEffect(() => {
        const fetchDog = async () => {
            try {
                setLoading(true);
                // Hacer la solicitud y el retraso de 2 segundos en paralelo
                const [data] = await Promise.all([
                    axios.get(`http://localhost:3001/dogs/${idBreed}`).then(response => response.data),
                    new Promise(resolve => setTimeout(resolve, 2000))
                ]);
                // console.log(data); //debe traer el perro por id en la consola
                setDogDetail(data);
            } catch (error) {
                setError('Error al obtener el perro por el ID');
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        if (idBreed) {
            fetchDog();
        }
        return () => { setDogDetail({}); };
    }, [idBreed]);

    if (loading) {
        return <LoadingSpinner/>
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleImageModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.detailContainer}>
            <h2 className={style.detailName}>Name: {dogDetail?.name}</h2>
            <div>
                <img 
                    src={dogDetail?.image} 
                    alt={`Image of ${dogDetail?.name}`} 
                    className={style.imageDetail}
                    onClick={handleImageModal}
                />
            </div>
            <p className={style.detailP}><span>Id</span> : {dogDetail?.id}</p>
            <p className={style.detailP}><span>Weight</span> : {dogDetail?.weight}</p>
            <p className={style.detailP}><span>Height</span> : {dogDetail?.height}</p>
            <p className={style.detailP}><span>Life Span</span> : {dogDetail?.life_span}</p>
            <p className={style.detailP}><span>Temperament</span> : {dogDetail?.temperament}</p>
            <Link to='/home'>
                <button className={style.detailButton}>Home</button>
            </Link>

            {isModalOpen && (
                <div className={style.modal} onClick={handleCloseModal}>
                <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                    <button className={style.closeButton} onClick={handleCloseModal}>&times;</button>
                    <img 
                        src={dogDetail?.image} 
                        alt={`Image of ${dogDetail?.name}`} 
                        className={style.modalImage}
                    />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Detail;