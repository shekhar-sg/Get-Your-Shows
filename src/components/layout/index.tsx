import HomePage from "../pages/homePage";
import {Outlet} from "react-router-dom";

const BaseLayout = () => {
    return (
        <>
            <HomePage/>
            <Outlet/>
        </>
    );
};

export default BaseLayout;
