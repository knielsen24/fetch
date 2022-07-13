import React, { useEffect } from 'react'
import { useState } from 'react';
import { Stack, Box, Paper, Typography, Divider, List, ListItemAvatar, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import { bgcolor } from '@mui/system';
import Image from 'mui-image'
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PhoneIcon from '@mui/icons-material/Phone';


export default function CompanyPage({name, num_of_employees, phone, address, email, image}) {

    

    console.log(name)

    const mainContainerStyle = 'silly'
    // const stackStyle = sx={{direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}}
    const subContainerStyle = 'silly'
    const cardStyle = 'silly'
    const featureStyle = 'silly'

    return(

        <>
        
        <div
            style={{
               backgroundImage: "white",
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition: "fixed",
               height: "80vh",
               display: 'flex'
            }}
         >
            <Stack direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}>
                <Box sx={{width: '45vw', height: "80vh", bgcolor:'white', margin:'auto'}}>
                    <Box sx={{width: '40vw', height: "80vh", bgcolor:'white', position:'relative', margin:'auto'}}>
                    </Box>
                </Box>
                <Box sx={{width: '45vw', height: "80vh", bgcolor:'white', margin:'auto', }}>
                <Divider sx={{marginBottom: '10px', color:'white'}} />
                    <Box sx={{width: '40vw', height: "75vh", bgcolor:'white', position:'relative', margin:'auto', borderBottomLeftRadius: '8px'}}>
                    <Paper  elevation={0} sx={{marginTop:'2vw', height:'100%', bgcolor:'snow'}}>
                        <Stack spacing={0} alignItems={'center'} justifyContent={'center'} >
                             <Image duration={0} shift={0}  src={image} fit='cover' showLoading='true' height={'20vh'} />
                             <Paper elevation={0} sx={{background:'rgba(0, 133, 255, 1)', width:'40vw', height: '5vh', borderRadius: 0, textAlign: 'center'}}>
                             <Typography color={'whitesmoke'} variant='h4'>{name}</Typography> 
                             </Paper>
                             <List>
                                <ListItem alignItems='flex-start'>
                                <ListItemText primary={"What Emplyees Are Saying"}
                                                primaryTypographyProps={{
                                                    fontSize: 24
                                                }}
                                    /> 
                                 </ListItem>
                                <ListItem alignItems='flex-start'>
                                    <ListItemAvatar alt='User' src={image}>
                                    </ListItemAvatar>
                                    <ListItemText
                                     primary={'stuff'}
                                     secondary={'name'}
                                    />     
                                </ListItem>
                                <ListItem alignItems='flex-start'>
                                    <ListItemAvatar alt='User' src={image}>
                                    </ListItemAvatar>
                                    <ListItemText
                                     primary={'stuff'}
                                     secondary={'name'}
                                    />    
                                </ListItem>
                             </List>
                             <Box sx={{width:'37vw', margin:'auto'}}>
                             </Box>
                             <List>
                             <ListItem>
                                <ListItemIcon>
                                    <EmojiPeopleIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={num_of_employees}
                                secondary="Employees"
                                >
                                </ListItemText>
                                </ListItem>
                             <ListItem>
                                <ListItemIcon>
                                    <BusinessIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={address}
                                secondary="Headquarters"
                                >
                                </ListItemText>
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <EmailIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={email}
                                secondary="Email"
                                >
                                </ListItemText>
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <PhoneIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={phone}
                                secondary="Phone Number"
                                >
                                </ListItemText>
                                </ListItem>
                             </List>
                        </Stack>
                        </Paper>
                    </Box>
                </Box>
            </Stack>



        </div>
        
        
        </>

    )
}