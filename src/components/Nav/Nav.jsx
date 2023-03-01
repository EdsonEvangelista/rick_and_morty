import SearchBar from "../SearchBar/SearchBar";
import styleNav from  "./Nav.module.css";

const Nav = ({ onSearch }) => {

    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )


}

export default Nav;