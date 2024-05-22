import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const Detail = () => {
    const { idBreed } = useParams();
    return (
        <div>
            <h1>Detail Page for ID: {idBreed}</h1>
            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Detail;