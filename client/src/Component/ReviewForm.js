import { Box, Rating, Stack, TextField, Button } from "@mui/material";
import { borderRadius } from "@mui/system";
import React, { useState } from "react";

import RightContainer from "./RightContainer";

export default function ReviewForm() {
   // const [review, setReview] = useState()

   // const handleChange = (e) =>{
   //     const name = e.target.name
   //     const value = e.target.value

   //     setReview(values => ({...values, [name]: value}))

   // }

   // console.log(review)

   return (
      <>
         <RightContainer />
      </>

      // <>      <Box sx={{background: 'black', height: 525, width: 350, margin: 'auto', borderRadius: '8px'}}>
      //         <Stack alignItems={'center'} justifyContent={'center'} spacing={10}>
      //         <Box
      //           display={"flex"}
      //           alignItems={"center"}
      //           justifyContent={"center"}
      //           sx={{
      //              color: "white",
      //              background: "rgba(0, 224, 255, 1)",
      //              width: 350,
      //              height: 50,
      //              borderTopLeftRadius: "8px",
      //              borderTopRightRadius: "8px",
      //              borderBottomLeftRadius: "0px",
      //              borderBottomRightRadius: "0px",
      //              marginBottom: 3,
      //           }}
      //        >
      //           <h3>Manage Your Reviews</h3>

      //         </Box>
      //         <Box sx={{ margin: 'auto', width:"20vw", height: '20vh',  background:'white'}}>
      //                 <form onChange={handleChange} >
      //                 <Stack alignItems={"center"} justifyContent={'center'} spacing={10}>
      //                     <TextField size="large" name="review_text" />
      //                     <Rating name="stars" />
      //                     <Button disabledElevation name='submit' type="submit" > Submit </Button>
      //                 </Stack>
      //                 </form>
      //         </Box>
      //     </Stack>
      //     </Box>

      // </>
   );
}
