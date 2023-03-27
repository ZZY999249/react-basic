import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { ContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const data = {
//     a: 10,
//     b: 20,
//     changea(n) {
//         console.log(data);
        
//         data.a = n;
//     }
// }
root.render(
    <div>
        {/* <ContextProvider> */}
            <App />
        {/* </ContextProvider> */}
    </div>

);
