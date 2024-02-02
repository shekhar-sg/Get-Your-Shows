import {Backdrop, Button, IconButton, Stack, TextField} from "@mui/material";
import {Close} from "@mui/icons-material";
import {useCallback, useEffect, useState} from "react";

interface FormProps {
    onClose: () => void
    showName: string
}

interface FormData {
    name: string
    email: string
    phone: string
    tickets: number
}

const Form = (props: FormProps) => {
    const {onClose, showName} = props
    const [formData, setFormData] = useState<FormData>({
        name: showName,
        email: "",
        phone: "",
        tickets: 0
    })
    const {name, phone, email, tickets} = formData

    const handleSubmit = useCallback(() => {
        localStorage.setItem(showName, JSON.stringify(formData));
        onClose()
    }, [formData, onClose, showName])

    useEffect(() => {
        const data = localStorage.getItem(showName)
        if (data) {
            setFormData(JSON.parse(data))
        }
    }, [showName]);

    return (
        <Backdrop open={true} sx={{
            backgroundColor: "rgba(255,255,255,0.5)",
            backdropFilter: "blur(10px)",
            transition: "all 0.5s",
        }}>
            <Stack
                component={"form"}
                sx={{
                    width: "500px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0px 0px 68px 0px gray",
                    padding: "20px",
                    backgroundColor: "rgba(255,255,255,10)",
                    gap: "20px",
                    borderRadius: "10px",
                }}
                onSubmit={handleSubmit}
            >
                <IconButton onClick={onClose} sx={{
                    width: "fit-content", alignSelf: "center",
                    boxShadow: "0px 0px 8px 0px gray inset",
                }}>
                    <Close/>
                </IconButton>
                <TextField label={"SHow Name"} type={"text"} variant={"outlined"} value={name} disabled
                           onChange={(e) => setFormData((prevState) => ({
                               ...prevState,
                               name: e.target.value
                           }))}/>
                <TextField label={"Email"} type={"email"} variant={"outlined"}
                           value={email}
                           onChange={(e) => setFormData((prevState) => ({
                               ...prevState,
                               email: e.target.value
                           }))}/>
                <TextField label={"Phone"} variant={"outlined"}
                           value={phone}
                           onChange={(e) => {
                               const phone = e.target.value;
                               const reg = /^[0-9\b]+$/;
                               if (phone === '' || reg.test(phone)) {
                                   setFormData((prevState) => ({
                                       ...prevState,
                                       phone: phone
                                   }))
                               }
                           }}/>
                <TextField
                    label="Number of Tickets"
                    type="number"
                    variant="outlined"
                    value={tickets}
                    onChange={(e) => setFormData((prevState) => ({
                        ...prevState,
                        tickets: Number(e.target.value)
                    }))}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant={"outlined"}
                        type={"submit"}
                        sx={{
                            width: "124px",
                            marginX: "auto"
                        }}
                    // onClick={handleSubmit}
                >Book</Button>
            </Stack>
        </Backdrop>
    );
};

export default Form;
