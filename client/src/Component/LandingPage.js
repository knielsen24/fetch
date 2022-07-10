import React, {useState} from "react";
import {Grid, Paper, FormControl, Input, InputLabel, Button} from '@mui/material'

export default function LandingPage({setUser}) {

   const newUser = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
   }

   const [signUpData, setSignUpData] =  useState(newUser)
   console.log(signUpData)

   const handleChange = (e) => {
      const {name, value} = e.target
      setSignUpData({...signUpData, [name]: value})
   }

   function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      })
        .then((r) => r.json())
        .then(user => setUser(user))
    }

   return (
         <div style={{background: "url(/fetch_landing_background.png)"}}>
            <Grid>
               <Paper elevation={15} style={{padding: 20, height: '50vh', width: 280, margin: '20px'}}>
                  <form onSubmit={handleSubmit}>
                        create a new account
                     <FormControl variant="standard">
                     <InputLabel htmlFor="component-simple">first name</InputLabel>
                     <Input
                        type="first_name"
                        id="first_name"
                        name="first_name"
                        value={signUpData.first_name}
                        onChange={handleChange}
                     />
                     </FormControl>
                     <FormControl variant="standard">
                     <InputLabel htmlFor="component-simple">last name</InputLabel>
                     <Input
                        type="last_name"
                        id="last_name"
                        name="last_name"
                        value={signUpData.last_name}
                        onChange={handleChange}
                     />
                     </FormControl>
                     <FormControl variant="standard">
                     <InputLabel htmlFor="component-simple">email</InputLabel>
                     <Input
                        type="email"
                        id="email"
                        name="email"
                        value={signUpData.email}
                        onChange={handleChange}
                     />
                     </FormControl>
                     <FormControl variant="standard">
                     <InputLabel htmlFor="component-simple">password</InputLabel>
                     <Input
                        type="password"
                        id="password"
                        name="password"
                        value={signUpData.password}
                        onChange={handleChange}
                     />
                     </FormControl>
                     <FormControl variant="standard">
                     <InputLabel htmlFor="component-simple">confirm password</InputLabel>
                     <Input
                        type="password_confirmation"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={signUpData.password_confirmation}
                        onChange={handleChange}
                     />
                     </FormControl>
                     <FormControl variant="standard">
                     <Button variant="contained" size="small" type="submit">
                     Sign Up
                     </Button>
                     <p>already have an account?</p>
                     <Button variant="contained" size="small" type="submit">
                     Sign In
                     </Button>
                     </FormControl>
                  </form>
               </Paper>
            </Grid>
         </div>
   );
}
