import { Box, Rating, Stack, TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function ReviewForm() {

    const [review, setReview] = useState()

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value

        setReview(values => ({...values, [name]: value}))

    }

    console.log(review)

    return(

        <>
        <div
        style={{
            margin: 'auto',
            backgroundImage: `white`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "fixed",
            height: "80vh",
        }}>
            <Stack 
                direction={"row"}
                spacing={12}
                sx={{
                    margin: "auto"
                    }}  
            >
            <Box sx={{ margin: 'auto', width:"30vw", height: '40vh', background:'black'}}>

            </Box>

                <Box sx={{ margin: 'auto', width:"30vw", height: '40vh',  background:'black'}}>
                    <Box sx={{ margin: 'auto', width:'300px'}}>
                        <form onChange={handleChange} >
                        <Stack marginTop={'30px'}>
                            <TextField size="large" name="review_text" />
                            <Rating name="stars" />
                            <Button disabledElevation name='submit' type="submit" > Submit </Button>
                        </Stack>
                        </form> 
                    </Box> 
                </Box>
            </Stack>
        </div>

     </>
    )

}