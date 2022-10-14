import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerContext } from "../context/DataLayer";

const Header = () => {
    const [{ user }, dispatch] = useDataLayerContext();

    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input
                    type="text"
                    placeholder="Search for Artists, Songs or Albums"
                />
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;
