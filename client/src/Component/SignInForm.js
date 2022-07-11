import { Stack, TextField, Box, Typography, Paper } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function SignInForm() {
   const initialSignInData = {
      email: "",
      password: "",
   };

   const [signInData, setSignInData] = useState(initialSignInData);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setSignInData((signInData) => ({ ...signInData, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      // need to update route once backend routes are set
      fetch("dummyurl", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signInData),
      }).then((resp) => {
         if (resp.ok) {
            // Need to update user state in App.js
            // else render errors
            // check lab "phase-4-rails-putting-it-all-together-auth"
         }
      });
   };

   console.log(signInData);

   return (
      <>
         <div
            style={{
               backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "fixed",
               height: "80vh",
            }}
         />

         <Stack
            spacing={12}
            sx={{ position: "absolute", top: "14.5rem", left: "38.5vw" }}
         >
            <form onChange={handleChange} onSubmit={handleSubmit}>
               <Paper variant="outlined" sx={{ width: 400, height: 325 }}>
                  <Stack
                     spacing={4}
                     justifyContent="center"
                     alignItems="center"
                  >
                     <div></div>
                     <Typography variant="h6" color={"primary"}>
                        Sign In
                     </Typography>
                     <Box sx={{ width: 350 }}>
                        <Stack spacing={4}>
                           <TextField
                              fullWidth
                              type="email"
                              id="email"
                              name="email"
                              value={signInData.email}
                              size={"small"}
                           />
                           <TextField
                              fullWidth
                              type="password"
                              id="password"
                              name="password"
                              value={signInData.password}
                              size={"small"}
                           />
                        </Stack>
                     </Box>
                     <Button
                        variant="contained"
                        size="small"
                        type="submit"
                        disableElevation
                     >
                        Submit
                     </Button>
                  </Stack>
               </Paper>
            </form>
         </Stack>
      </>
   );
}

export default SignInForm;
