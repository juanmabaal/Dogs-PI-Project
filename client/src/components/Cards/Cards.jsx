import { useSelector, useDispatch } from "react-redux";


import Card from '../Card/Card';

const Cards = () => {
    const dogs = useSelector((state) => state.dogsCopy);
    console.log(dogs)
    return (
        <div>
            {
                dogs?.map(({id, name, weight, height, life_span, temperament, image})=> {
                    return <Card 
                        key={id}
                        id={id}
                        name ={name}
                        weight={weight}
                        height={height}
                        life_span={life_span}
                        temperament={temperament}
                        image={image}
                    />
                }
            )}
            <h1>Cards</h1>
            
        </div>
    );
};

export default Cards;