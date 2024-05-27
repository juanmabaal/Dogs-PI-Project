import { useSelector } from "react-redux";
import style from './Cards.module.css';
import Card from '../Card/Card';

const Cards = () => {
    const dogs = useSelector((state) => state.dogsCopy);
    console.log(dogs);
    return (
        <div className={style.cardsContainer}>
            {dogs?.map(({id, name, weight, height, life_span, temperament, image}) => (
                <div className={style.cardWrapper} key={id}>
                    <Card 
                        id={id}
                        name={name}
                        weight={weight}
                        height={height}
                        life_span={life_span}
                        temperament={temperament}
                        image={image}
                    />
                </div>
            ))}
        </div>
    );
};

export default Cards;


