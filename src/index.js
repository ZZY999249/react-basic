import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <App a="dfdsdfg" b={[1,2,3,4,5,6,7]} c={'10'}/>

    </div>

);
