import React from "react";
import { Stack, Box, Paper, Typography, Divider, List, ListItemAvatar, ListItemIcon, ListItemText, ListItem } from '@mui/material';
import Image from "mui-image";
import ProfileDeleteModal from "./ProfileDeleteModal";
import ProfileEditForm from "./ProfileEditForm";
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import startCase from "lodash.startcase";


function ProfileFeature({ user, handleDeleteProfile, onSetUser }) {
   // set default profile picture to profile icon

   return (

                        <Stack spacing={3} alignItems={'center'} justifyContent={'center'} >
                             <Image duration={0} shift={0}  src={user.image_url} fit='cover' showLoading='false' height={'20vh'} />
                             <Paper elevation={0} sx={{background:'rgba(0, 133, 255, 1)', width:'40vw', height: '5vh', borderRadius: 0, textAlign: 'center'}}>
                             <Typography color={'whitesmoke'} variant='h4'>{startCase(user.first_name + " " + user.last_name)}</Typography> 
                             </Paper>
                             <Box sx={{width:'37vw', margin:'auto'}}>
                             </Box>
                             <List>
                             
                      
                                <ListItem>
                                <ListItemIcon>
                                    <EmailIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={user.email}
                                secondary="Email"
                                >
                                </ListItemText>
                                </ListItem>
                                <ListItem>
                                <ListItemIcon>
                                    <BusinessIcon/>
                                </ListItemIcon>
                                <ListItemText
                                primary={'silly'}
                                secondary="Resume"
                                >
                                </ListItemText>
                                </ListItem>

                             </List>
                     
                  <ProfileEditForm {...user} onSetUser={onSetUser} />
                  <ProfileDeleteModal
                     handleDeleteProfile={handleDeleteProfile}
                     userId={user.id}
                  />
                  
                           




                        </Stack>
                  








         
          
   );
}

export default ProfileFeature;
