import { Stack, TextField, Box } from "@mui/material";
import React from "react";

export default function ReviewPage() {
   return (
      <>
         <div
            style={{
               backgroundImage: "white",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "fixed",
               height: "80vh",
            }}
         >
            <Stack
               direction={"row"}
               alignItems={"center"}
               justifyContent={"center"}
               spacing={10}
            >
                  <Box sx={{ width: 500, height: 500 }} />

            </Stack>
         </div>
      </>
   );
}
