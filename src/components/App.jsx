import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromURL } from "../state/spotify";
import { useDataLayerContext } from "../context/DataLayer";
import Login from "./Login";
import Player from "./Player";

const spotify = new SpotifyWebApi();

export const App = () => {
    const [{ user, token }, dispatch] = useDataLayerContext();

    useEffect(() => {
        const hash = getTokenFromURL();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            });

            spotify.setAccessToken(_token);

            spotify.getMe().then((user) => {
                dispatch({
                    type: "SET_USER",
                    user: user,
                });
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: "SET_PLAYLISTS",
                    playlists: playlists,
                });
            });

            spotify.getPlaylist("37i9dQZEVXcONtFKGWE1mt").then((response) => {
                dispatch({
                    type: "SET_DISCOVER_WEEKLY",
                    discoverWeekly: response,
                });
            });
        }
    }, []);

    return (
        <div className="app">
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
};
