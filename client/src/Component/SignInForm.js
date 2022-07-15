import { Stack, TextField, Box, Typography, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";

function SignInForm({ onSetUser, navigate }) {
   const initialSignInData = {
      email: "",
      password: "",
   };

   const [signInData, setSignInData] = useState(initialSignInData);
   const [error, setError] = useState([]);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setSignInData((signInData) => ({ ...signInData, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fetch("/login", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signInData),
      }).then((r) => {
         if (r.ok) {
            r.json()
               .then((user) => onSetUser(user))
               .then(navigate("findjobs"));
         } else {
            r.json().then((errorData) => setError(errorData.error));
         }
      });
   };
   console.log(error);

   return (
      <>
         <div
            style={{
               backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "fixed",
               height: "80vh",
               display: 'flex'
            }}
         >

         <Stack
            alignItems={"center"}
            justifyContent={"center"}
            spacing={10}
            sx={{
               margin: "auto",
            }}
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
                              required
                              fullWidth
                              type="email"
                              id="email"
                              name="email"
                              value={signInData.email}
                              size={"small"}
                              placeholder="Email"
                           />
                           <TextField
                              required
                              fullWidth
                              type="password"
                              id="password"
                              name="password"
                              value={signInData.password}
                              size={"small"}
                              placeholder="Password"
                           />
                        </Stack>
                     </Box>
                     {error.length > 0 && (
                        <div
                           style={{
                              color: "red",
                              listStyleType: "none",
                              textAlign: "center",
                           }}
                        >
                           <p>{error}</p>
                        </div>
                     )}
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
         </div>
      </>
   );
}

export default SignInForm;
