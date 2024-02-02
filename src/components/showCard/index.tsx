import {Apires} from "../../interface.ts";
import {Card, CardContent, CardMedia, CardProps, Typography} from "@mui/material";
import {Link} from "react-router-dom";

export interface CardProps_1 extends Omit<CardProps, 'children'> {
    data: Apires;
}

const ShowCard = (props: CardProps_1) => {

    const {data, ...restCardProps} = props;
    const {sx, ...restProps} = restCardProps
    const {id, image, name, genres, runtime, schedule: {days, time}, language} = data.show

    return (
        <>
            {image &&
                <Card sx={[{
                    position: "relative",
                    height: "400px",
                    width: "300px",
                    background: "primary",
                    boxShadow: "0px 0px 68px 0px gray inset",
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                }, ...(Array.isArray(sx) ? sx : [sx])]} {...restProps}>
                    <CardMedia
                        component={"img"}
                        alt={name}
                        image={image?.original}
                        sx={{
                            height: "210px",
                            width: "300px",
                            objectFit: "contain",
                            boxShadow: "0px 0px 68px 0px rgba(0,0,0,1) ",
                        }}
                    />
                    <CardContent>
                        <Typography sx={{fontFamily: "cursive"}}>Duration : &nbsp; {runtime}-min</Typography>
                        <Typography sx={{fontFamily: "cursive"}}> Schedule : &nbsp; {days} / {time} pm</Typography>
                        <Typography sx={{fontFamily: "cursive"}}> Languages : &nbsp; {language}</Typography>
                        <Typography sx={{display: "flex", fontFamily: "cursive"}}>Genres
                            : &nbsp;{genres.map((item, key) => {
                                return (<Typography key={key}
                                                    sx={{fontFamily: "cursive"}}>{(key ? ', ' : '') + item}</Typography>)
                            })}</Typography>
                    </CardContent>
                    <Link to={`/${id}`} style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "100%",
                        height: "50px",
                        background: "#000",
                        color: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        textDecoration: "none",
                    }}>Summary</Link>
                </Card>
            }
        </>
    );
};

export default ShowCard;
