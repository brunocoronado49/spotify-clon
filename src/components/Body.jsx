import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import { useDataLayerContext } from "../context/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";

const Body = ({ spotify }) => {
    const [{ discoverWeekly }, dispatch] = useDataLayerContext();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body-info">
                <img src={discoverWeekly?.images[0].url} alt="song" />
                <div className="body-infoText">
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map((item) => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
};

export default Body;
