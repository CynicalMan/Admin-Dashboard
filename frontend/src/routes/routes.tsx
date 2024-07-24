import { createBrowserRouter,createHashRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import AddItemPage from "../pages/AddItemPage";
import ItemPage from "../pages/ItemPage";
import ItemsPage from "../pages/ItemsPage";
import ItemsListPage from "../pages/ItemsListPage";
import App from "../App";
import UpdateItemPage from "../pages/UpdateItemPage";

export const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "items",
                element: <ItemsPage />,
                children: [
                {
                    index: true,
                    element: <ItemsListPage />,
                },
                {
                    path: "add-item",
                    element: <AddItemPage />,
                },
                {
                    path: "update-item/:id",
                    element: <UpdateItemPage />,
                },
                {
                    path: "item/:id",
                    element: <ItemPage />,
                },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
