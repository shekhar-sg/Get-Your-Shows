import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "./components/layout";
import HomePage from "./components/pages/homePage";
import SummaryPage from "./components/pages/summaryPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "summary",
                element: <SummaryPage/>,
            }
        ]
    }
])