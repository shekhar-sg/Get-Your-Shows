import {createBrowserRouter} from "react-router-dom";

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