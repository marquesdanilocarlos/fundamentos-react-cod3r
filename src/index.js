import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

const tag = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(tag, document.getElementById("root"));
