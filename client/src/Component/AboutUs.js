import React from 'react'
import { Grid, Avatar, Stack, Card, Typography, Link, CardContent, CardActions, IconButton} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function AboutUs() {
  return (
    <div>
      <Typography 
        align="center" 
        gutterBottom='true'
        variant='h2'
        fontFamily='TimesNewRomanPS-BoldItalicMT'> About Us </Typography>
      <Stack direction= 'row' spacing={20} justifyContent="center" alignItems="center">
        <Card variant="outlined" raised={true}>
        <Avatar
          alt="dchan"
          src="/troll.jpeg"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent >
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'>  Daniel Chan </Typography>
            <CardActions display="flex" justifyContent="center">
              <Link href="https://github.com/danchan020">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}}/>
              </Link>
              <Link href="https://www.linkedin.com/in/danielchan-/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
              </Link>
            </CardActions>
        </CardContent>
        </Card>
        <Card variant="outlined">
        <Avatar
          alt="cstring"
          src="/troll3.jpeg"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent>
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'> Christian Stringham </Typography>
          <CardActions>
            <Link href="https://github.com/cesalt">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}}/>
            </Link>
            <Link href="https://www.linkedin.com/in/cesalt/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
            </Link>
          </CardActions>
        </CardContent>
        </Card>
        <Card variant="outlined">
        <Avatar
          alt="knielson"
          src="/troll2.png"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent>
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'> Kevin Nielsen </Typography>
          <CardActions>
            <Link href="https://github.com/knielsen24">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}}/>
            </Link>
            <Link href="https://www.linkedin.com/in/kevin-nielsen-se/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
            </Link>
          </CardActions>
        </CardContent>
        </Card>
      </Stack>
      <Typography align="center" gutterBottom='true' variant='h6' fontFamily='Palatino-Bold'> 
          Project Repository: &nbsp; <Link href = "https://github.com/knielsen24/fetch"> fetch </Link>
      </Typography>
      
    </div>
  )
}
