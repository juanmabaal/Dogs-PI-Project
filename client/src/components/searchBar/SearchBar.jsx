import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogByName } from '../../redux/actions/actions';

const SearchBar = () => {

    return (
        <div>
            <form >
                <input/>
                <button>
                    Buscar
                </button>
            </form>
        </div>
    )
}

export default SearchBar;