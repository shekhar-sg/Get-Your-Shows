import {createBrowserRouter, Outlet, redirect} from "react-router-dom";
import HomePage from "./components/pages/homePage";
import SummaryPage from "./components/pages/summaryPage";
import {Provider} from "react-redux";
import store from "./store";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Provider store={store}><Outlet/></Provider>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: ":id",
                loader: async ({params}) => {
                    if (!params.id) {
                        redirect("/")
                    }
                    return params.id
                },
                element: <SummaryPage/>,
            }
        ]
    }
])