import React, { useEffect } from 'react'
import { useState } from 'react';
import { Stack, Box, Paper, Typography, Divider, List, ListItemAvatar, ListItemIcon, ListItemText, ListItem, Avatar } from '@mui/material';
import Image from 'mui-image'
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import PhoneIcon from '@mui/icons-material/Phone';
import Card from './Card';


export default function CompanyPage({name, num_of_employees, phone, address, email, image, first_review, first_reviewer, job_postings}) {

    

    const reviewText = first_review.review_text
    const reviewer = `${first_reviewer.first_name} ${first_reviewer.last_name}`

    const mainContainerStyle = 'silly'
    // const stackStyle = sx={{direction={'row'} margin={'auto'} spacing={4} alignItems={'center'} justifyContent={'center'}}
    const subContainerStyle = 'silly'
    const cardStyle = 'silly'
    const featureStyle = 'silly'


    let renderJobPostings

        // if (job_postings) {
        //   renderJobPostings = job_postings.map(job => {
        //         return <Card id={job.id}
        //                 {...job} /> })


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
                    {renderJobPostings}
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
                                <ListItemText primary={`What People Are Saying About ${name}`}
                                                primaryTypographyProps={{
                                                    fontSize: 18
                                                }}
                                    /> 
                                 </ListItem>
                                <ListItem alignItems='flex-start'>
                                    <ListItemAvatar  >
                                        <Avatar src={first_reviewer.image_url} alt='User' />
                                    </ListItemAvatar>
                                    <ListItemText
                                     primary={reviewText}
                                     secondary={reviewer}
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