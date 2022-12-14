import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import { Grid, Slider } from "@mui/material";
import {
    FavoriteBorder,
    PlayCircleFilled,
    RemoveCircleOutline,
} from "@mui/icons-material";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <img
                    src="https://i.scdn.co/image/ab67616d00004851a389174f8f9987c23deba02b"
                    alt="img"
                    className="footer-album-logo"
                />
                <div className="footer-songInfo">
                    <h4>Song name</h4>
                    <p>Author</p>
                </div>
                <div className="footer-songReactions">
                    <FavoriteBorder />
                    <RemoveCircleOutline />
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green" />
                <SkipPreviousIcon className="footer-icon" />
                <PlayCircleFilled fontSize="large" className="footer-icon" />
                <SkipNextIcon className="footer-icon	" />
                <RepeatIcon className="footer-green" />
            </div>
            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;
