import React from "react";
import { Stack, TextField, Box, Paper, Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
// import landingBackground from '../client/public/fetch_landing_background.png'

export default function LandingPage() {
   return (
      <>
 <div style={{
      backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'fixed',
      height: '80vh',
      
      
      
    }}/>
      <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'} spacing={18} sx={{margin: 'auto', position: 'absolute', top: '14.5rem', left: '11vw'}}>
      <img style={{width: "223.92px", height: '294.4px'}} src="https://i.imgur.com/xYnM8Y6.png" alt="create an account"/>
      <img style={{width: "223.92px", height: '294.4px'}} src="https://i.imgur.com/1NjO9rf.png" alt="create an account"/>
      <img style={{width: "223.92px", height: '294.4px'}} src="https://i.imgur.com/PHXOSF9.png" alt="create an account"/>
      <Box sx={{width: 350, height: 525, backgroundColor: 'white', borderRadius: '8px'}}>

      <Stack alignItems={'center'} justifyContent={'center'} >
      <Box sx={{width: 300, height: 400, backgroundColor: 'white'}}>
      <Stack spacing={3} alignItems={'center'} justifyContent={'center'} >
      <Paper justifyContent={'center'} sx={{width: 350, height: 50, borderTopLeftRadius: '8px', borderTopRightRadius: '8px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}}>
      <Stack alignItems={'center'} justifyContent={'center'} >

         <Typography color={'primary'} variant={'h5'}>Create An Account</Typography>
         </Stack>
         </Paper>
         <TextField label='First Name' fullWidth size="small"></TextField>
         <TextField label='Last Name'fullWidth size="small"></TextField>
         <TextField label='Email' fullWidth size="small"></TextField>
         <TextField label='Password' fullWidth size="small"></TextField>
         <TextField label='Confirm Password' fullWidth size="small"></TextField>
         <FormControlLabel value="start" control={<Checkbox size="small" />} label="Accept Terms and Conditions" labelPlacement="end"/>

         <Button fullWidth variant="contained" disableElevation>Sign Up</Button>
         </Stack>
         </Box>
      </Stack>
   
            <Paper backgroundColor='secondary'></Paper>
            </Box>

    </Stack>
       
       
       
       
       

  
      
      </>
   );
}
