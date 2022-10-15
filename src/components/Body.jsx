import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import { useDataLayerContext } from "../context/DataLayer";
import Header from "./Header";
import SongRow from "./SongRow";
import "../styles/Body.css";

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
                    <p>{discoverWeekly?.description}</p>
                </div>
            </div>
            <div className="body-songs">
                <div className="body-icons">
                    <PlayCircleFilled className="body-shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discoverWeekly?.tracks.items.map((item, index) => (
                    <SongRow track={item.track} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Body;
