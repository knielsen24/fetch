import React from "react";
import {
   AppBar,
   Typography,
   Stack,
   TextField,
   Divider,
   Link,
} from "@mui/material";
import { Box } from "@mui/system";

export default function NavBar() {
   return (
      <>
         <Stack direction={"column"} spacing={3}>
            <AppBar elevation={0} position="static" color="">
               <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  marginTop={2}
               >
                  <Stack direction={"row"} spacing={4} alignItems={"center"}>
                     <div></div>
                     <Link
                        component="button"
                        underline="never"
                        fontFamily={"sans-serif"}
                        color={"primary"}
                        fontSize={36}
                     >
                        fetch
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Find Jobs
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Company Reviews
                     </Link>
                     <Link component="button" underline="hover" color={"black"}>
                        Find Salaries
                     </Link>
                  </Stack>
                  <Stack direction={"row"} spacing={2} sx={{ mr: 2 }}>
                     <Link component="button" underline="hover" color={"black"}>
                        Sign In
                     </Link>
                     <Divider orientation="vertical" />
                     <Link component="button" underline="hover" color={"black"}>
                        Employers / Post Jobs
                     </Link>
                  </Stack>
               </Stack>
               <Stack
                  direction={"row"}
                  spacing={36}
                  alignItems={"center"}
                  justifyContent={"space-between"}
               >
                  <Box sx={{ mb: 7 }} />
                  <TextField
                     fullWidth
                     size="small"
                     id="filled-search"
                     label="...snag your dream job"
                     type="search"
                     variant="outlined"
                  />
                  <Box />
               </Stack>
            </AppBar>
            <Divider fullWidth />
         </Stack>
      </>
   );
}
