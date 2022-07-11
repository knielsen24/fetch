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

   console.log(signInData)

   return (
      <>
   
            <Box 
               alignItems={'center'} 
               justifyContent={'center'} 
               sx={{
               display: 'flex',
               flexWrap: 'wrap',
               mt: 5
               }}
            >
            <form onChange={handleChange} onSubmit={handleSubmit}>
               <Paper variant="outlined" sx={{width: 400, height: 325}} >
               <Stack spacing={4} justifyContent='center' alignItems='center'>
               <div></div>
               <Typography variant="h6" color={'primary'}>Sign In</Typography>
               <Box sx={{width:350}}>
                  <Stack spacing={4}>
               <TextField
                fullWidth
                  type="email"
                  id="email"
                  name="email"
                  value={signInData.email}
                  size={'small'}
               />
               <TextField
               fullWidth
                  type="password"
                  id="password"
                  name="password"
                  value={signInData.password}
                  size={'small'}
               />
               </Stack>
               </Box>
                <Button variant="contained" size="small" type="submit" disableElevation>
               Submit
            </Button>
            </Stack>
            
            </Paper>
            </form>
            </Box>
            <div style={{
      backgroundImage: 'url("https://i.imgur.com/20FbvsI.png")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: "100%"
    }}></div>
          
            
            
    
      </>
   );
}

export default SignInForm;
