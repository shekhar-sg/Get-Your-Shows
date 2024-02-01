import {useFetchAllShowsQuery} from "../../../store/api/showApi.ts";
import {useEffect} from "react";

const HomePage = () => {

    const {data} = useFetchAllShowsQuery()


    useEffect(() => {
        console.log("=>(index.tsx:11) data", data);
    }, [data]);

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

export default HomePage;
