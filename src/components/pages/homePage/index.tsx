import {useFetchAllShowsQuery} from "../../../store/api/showApi.ts";
import {useEffect} from "react";
import ShowCard from "../../showCard";
import Grid2 from "@mui/material/Unstable_Grid2";

const HomePage = () => {

    const {data} = useFetchAllShowsQuery()

    useEffect(() => {
        console.log("=>(index.tsx:11) data", data);
    }, [data]);
    return (
        <>
            <Grid2 container gap={10} sx={{justifyContent: "center", marginY: "82px"}}>
                {data && data.map((show, key) => {
                    return <ShowCard key={key} data={show}/>
                })}
            </Grid2>
        </>
    );
};

export default HomePage;
