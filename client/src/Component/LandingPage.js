import React, { useState } from "react";
import { Paper, FormControl, Input, InputLabel, Button, Stack, Box } from '@mui/material'

export default function LandingPage({ setUser }) {

   const newUser = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
   }

   const [signUpData, setSignUpData] = useState(newUser)
   console.log(signUpData)

   const handleChange = (e) => {
      const { name, value } = e.target
      setSignUpData({ ...signUpData, [name]: value })
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
      <>
         <div style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'fixed',
            height: '80vh',



         }} />
         <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={18} sx={{ margin: 'auto', position: 'absolute', top: '14.5rem', left: '11vw' }}>
            <img style={{ width: "223.92px", height: '294.4px' }} src="https://i.imgur.com/xYnM8Y6.png" alt="create an account" />
            <img style={{ width: "223.92px", height: '294.4px' }} src="https://i.imgur.com/1NjO9rf.png" alt="create an account" />
            <img style={{ width: "223.92px", height: '294.4px' }} src="https://i.imgur.com/PHXOSF9.png" alt="create an account" />
            <Box sx={{ width: 350, height: 525, backgroundColor: 'white', borderRadius: '8px' }}>

               <Stack alignItems={'center'} justifyContent={'center'} >
                  <Box sx={{ width: 300, height: 400, backgroundColor: 'white' }}>
                     <Stack spacing={3} alignItems={'center'} justifyContent={'center'} >
                        <Paper justifyContent={'center'} sx={{ width: 350, height: 50, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' }}>
                           <Stack alignItems={'center'} justifyContent={'center'} >
                              <Paper elevation={15} style={{ padding: 20, height: '50vh', width: 280, margin: '20px' }}>
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
                                          type="password"
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
                                       <Button variant="contained" size="small" type="click">
                                          Sign In
                                       </Button>
                                    </FormControl>
                                 </form>
                              </Paper>
                           </Stack>
                        </Paper>
                     </Stack>
                  </Box>


               </Stack>


               {/* <Paper backgroundColor='secondary'></Paper> */}
            </Box>

         </Stack>

      </>









   );
}
