import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Stylesheet
import "./index.scss";

const Root = () => {
    return (
        <div>
            <h1>Root</h1>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Root />
    </div>,
    document.getElementById("root")
);
serviceWorker.unregister();
