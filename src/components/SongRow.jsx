import "../styles/SongRow.css";

const SongRow = ({ track }) => {
    return (
        <div className="songRow">
            <img
                src={track.album.images[0].url}
                alt="song"
                className="songRow-album"
            />
            <div className="songRow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map((artist) => artist.name).join(",")}
                    {track.album.name}
                </p>
            </div>
        </div>
    );
};

export default SongRow;
