import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogByName } from '../../redux/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import style from './SearchBar.module.css';

const SearchBar = ({ setCurrentPage }) => {
    
//Se crea un estado local para buscar por nombre
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const onSearch = () => {
    dispatch(getDogByName(name));
    setName("");
    setCurrentPage(1);
  }

  const backEverything = () => {
    dispatch(getDogs());
  }

  return (
    <div className={style.searchBarContainer}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <input
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="Encuentra la raza de perro"
          className={style.searchInput}
        />
        <button
          type="submit"
          onClick={onSearch}
          className={style.searchButton}
        >
          <FontAwesomeIcon icon={faSearch} className={style.searchButtonIcon} />
        </button>
      </form>
      <button
        onClick={backEverything}
        className={style.backButton}
      >
        <FontAwesomeIcon icon={faArrowLeft} className={style.backButtonIcon} />
      </button>
    </div>
  )
}

export default SearchBar;
