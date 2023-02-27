import SearchBar from "../SearchBar/SearchBar";
import styleNav from  "./Nav.module.css";

const Nav = (props) => {


    return (
        <div className={styleNav.NavContenedor}>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )


}

export default Nav;