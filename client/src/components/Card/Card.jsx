
const Card = ({id, name, weight, height, life_span, temperament, image}) => {
    return(
        <div>
            <div>
                <h3>Name: {name}</h3>
            </div>
            <div>
                <img src={image}/>
            </div>
            <div>
                <p>Weight: {weight}</p>
                <p>Temperaments: {temperament}</p>
            </div>
            <div>
                <img/>
            </div> 
        </div>
    );
};

export default Card;