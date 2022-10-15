import SideBarOption from "./SideBarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { logo } from "../styles/logo";
import { useDataLayerContext } from "../context/DataLayer";

const SideBar = () => {
    const [{ playlists }, dispatch] = useDataLayerContext();

    return (
        <div className="sidebar">
            <svg
                viewBox="0 0 1134 340"
                class="spotify-logo--text sidebar__logo"
            >
                <title>Spotify</title>
                <path fill="currentColor" d={logo}></path>
            </svg>
            <SideBarOption Icon={HomeIcon} title="Home" />
            <SideBarOption Icon={SearchIcon} title="Search" />
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.items?.map((playlist) => (
                <SideBarOption title={playlist.name} />
            ))}
        </div>
    );
};

export default SideBar;
