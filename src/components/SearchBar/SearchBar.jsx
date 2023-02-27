import styleSearch from "./SearchBar.module.css";

function SearchBar({onSearch}) {      
   return (
      <div className={styleSearch.contenedor} >
         <input type='search' />
      <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

export default SearchBar;