import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Playground from './components/playground/Playground.jsx';
import ChooseStarter from "./components/ChooseStarter.jsx";
import Fight from "./components/fight/Fight.jsx";
import FoeFainted from "./components/finish/FoeFainted.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/playground",
        element: <Playground/>
    },
    {
        path: "/chooseStarter",
        element: <ChooseStarter/>
    },
    {
        path: "/fight",
        element: <Fight/>
    },
    {

        //delete this
        path: "/finish",
        element: <FoeFainted/>
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
