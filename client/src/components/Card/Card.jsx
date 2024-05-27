import style from './Card.module.css';
import { Link } from "react-router-dom";

const Card = ({id, name, weight, height, life_span, temperament, image}) => {
    return(
        <div className={style.cardContainer}>
            <Link to={`/detail/${id}`} className={style.cardLink}>
                <h3 className={style.cardName}>Name: {name}</h3>
            </Link>
            <div>
                <img src={image} alt={`Image of ${name}`} className={style.cardImage}/>
            </div>
            <div className={style.cardDetails}>
                <p className={style.cardInfo}>Weight: {weight}</p>
                <p className={style.cardInfo}>Temperaments: {temperament}</p>
            </div>
        </div>
    );
};

export default Card;
