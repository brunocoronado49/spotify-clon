import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { initialState, reducer } from "./state/Reducer";
import { DataLayer } from "./context/DataLayer";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <DataLayer initialState={initialState} reducer={reducer}>
            <App />
        </DataLayer>
    </React.StrictMode>
);
