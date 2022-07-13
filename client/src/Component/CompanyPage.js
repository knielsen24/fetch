import React, { useEffect } from 'react'
import { useState } from 'react';
import { Stack, Box, Paper, Typography } from '@mui/material';
import { bgcolor } from '@mui/system';

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
                <Box sx={{width: '45vw', height: "80vh", bgcolor:'blanchedalmond', margin:'auto'}}>
                    <Box sx={{width: '40vw', height: "80vh", bgcolor:'white', position:'relative', margin:'auto'}}>

                    </Box>
                </Box>
                <Box sx={{width: '45vw', height: "80vh", bgcolor:'blanchedalmond', margin:'auto'}}>
                    <Box sx={{width: '40vw', height: "80vh", bgcolor:'white', position:'relative', margin:'auto', borderRadius: '8px'}}>
                        <Stack spacing={4} margin={'2vh'} alignItems={'center'} justifyContent={'center'} >
                           <Paper elevation={0} sx={{borderTopRadius: '8px', borderBottomLeftRadius:0, borderBottomRightRadius:0, background:'blue', width:'40vw', height: '5vh', textAlign: 'center'}}>
                             <Typography  color={'whitesmoke'} fontSize={24}>{name}</Typography> 
                             </Paper>
                        </Stack>
                    </Box>
                </Box>

            </Stack>



        </div>
        
        
        </>

    )
}