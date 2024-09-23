import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Create from "./src/components/Create";
import Update from "./src/components/Update";

export const router = createBrowserRouter([
    {path:'/', element:<App />},
    {path:'/create', element:<Create />},
    {path:'/update/:id', element:<Update />}
])