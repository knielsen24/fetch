import React from "react";
import { Link, Stack, Divider } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
   return (
      <>
         <Divider fullWidth />

         <div
            sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
            elevation={0}
         >
            <Stack
               direction={"row"}
               spacing={10}
               justifyContent="flex-start"
               alignItems="center"
               marginTop={2}
            >
               <Link
                  component={RouterLink}
                  to="/signin"
                  underline="hover"
                  color={"black"}
                  sx={{ ml: 4 }}
               >
                  About Us
               </Link>
               <Link
                  component={RouterLink}
                  to="/signin"
                  underline="hover"
                  color={"black"}
               >
                  Browse Companies
               </Link>
               <Link
                  component={RouterLink}
                  to="/signin"
                  underline="hover"
                  color={"black"}
               >
                  Post a Job
               </Link>
               <Link
                  component={RouterLink}
                  to="/signin"
                  underline="hover"
                  color={"black"}
                  sx={{ mb: 20 }}
               >
                  Terms Of Service
               </Link>
            </Stack>
         </div>
      </>
   );
}
