import {useLoaderData} from "react-router-dom";
import {useMemo, useState} from "react";
import {useFetchAllShowsQuery} from "../../../store/api/showApi.ts";
import {Box, Button, Card, CardContent, CardHeader, CardMedia, CircularProgress, Stack} from "@mui/material";
import Form from "../../form.tsx";

const SummaryPage = () => {
    const id = useLoaderData() as string
    const {data} = useFetchAllShowsQuery()

    const showItem = useMemo(() => {
        if (data) {
            return data.find((item) => item.show.id === Number(id))
        }
    }, [data, id])
    const showName = showItem?.show.name

    const [formVisible, setFormVisible] = useState(false)

    return showItem ? (
        <>
            <Stack>
                <Card
                    sx={{
                        width: "800px",
                        height: "fit-content",
                        margin: "60px auto",
                        boxShadow: "0px 0px 68px 0px gray",

                    }}>
                    <CardHeader title={showName} titleTypographyProps={{
                        variant: "h4",
                        textAlign: "center",
                        fontFamily: "cursive",
                        paddingY: "20px",
                        boxShadow: "30px 20px 48px 0px gray inset ",
                    }}/>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: "row",
                    }}>
                        <CardMedia
                            component={"img"}
                            image={showItem.show.image?.original}
                            sx={{
                                height: "fit-content",
                                width: "268px",
                                objectFit: "contain",
                                boxShadow: "0px 0px 68px 0px rgba(0,0,0,1) ",
                            }}
                        />
                        <Box
                            dangerouslySetInnerHTML={{__html: showItem.show.summary}}
                            sx={{
                                p: 4,
                            }}
                        >
                        </Box>
                    </CardContent>
                </Card>
                <Button variant={"contained"}
                        sx={{
                            margin: "auto !important"
                        }}
                        onClick={() => setFormVisible(true)}
                >Book Now</Button>
            </Stack>
            {
                formVisible && <Form
                    onClose={() => {
                        setFormVisible(false)
                    }}
                    showName={showName}
                />
            }
        </>
    ) : <CircularProgress/>;
};

export default SummaryPage;
