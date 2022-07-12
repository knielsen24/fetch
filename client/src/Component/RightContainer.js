import React from "react";
import { Box, Stack } from "@mui/material";

export default function RightContainer() {
   return (
      <Box
         sx={{
            width: 350,
            height: 525,
            backgroundColor: "white",
            borderRadius: "8px",
         }}
      >
         <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
               color: "white",
               background: "rgba(0, 224, 255, 1)",
               width: 350,
               height: 50,
               borderTopLeftRadius: "8px",
               borderTopRightRadius: "8px",
               borderBottomLeftRadius: "0px",
               borderBottomRightRadius: "0px",
               marginBottom: 3,
            }}
         >
            <h3>Create An Account</h3>
         </Box>
         <form>
            <Box sx={{ width: 300, margin: "auto" }}>
               <Stack
                  spacing={2.5}
                  alignItems={"center"}
                  justifyContent={"center"}
               ></Stack>
            </Box>
         </form>
      </Box>
   );
}
