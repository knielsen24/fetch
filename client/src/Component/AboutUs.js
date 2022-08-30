import React from 'react'
import { Grid, Avatar, Stack, Card, Typography, Link, CardContent, CardActions, CardHeader} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function AboutUs() {
  return (
    <div>
      <Typography 
        align="center" 
        margin={4}
        variant='h2'
        fontFamily='TimesNewRomanPS-BoldItalicMT'> About Us </Typography>
      <Stack    
          direction="row"
          justifyContent="space-evenly"
          spacing={0} marginBottom={5}>
        <Card variant="outlined" sx={{ width: 365, height: 400, paddingTop: 8 }}>
          <div align="center" justifyContent="center">
        <Avatar
          alt="Dchan"
          src="/daniel.jpg"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent alignItems={'center'} justifyContent={'center'} >
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'>  Daniel Chan </Typography>
            <CardActions  >
              <Link marginLeft="auto" href="https://github.com/danchan020">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}} />
              </Link>
              <Link marginRight="auto" href="https://www.linkedin.com/in/danielchan-/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
              </Link>
            </CardActions>
        </CardContent>
          </div>
        </Card>
        <Card variant="outlined" sx={{ width: 365, height: 400, paddingTop: 8 }}>
        <div align="center" justifyContent="center">
        <Avatar
          alt="Cstring"
          src="/christian.jpeg"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent>
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'> Christian Stringham </Typography>
          <CardActions>
            <Link marginLeft="auto" href="https://github.com/cesalt">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}}/>
            </Link>
            <Link marginRight="auto" href="https://www.linkedin.com/in/cesalt/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
            </Link>
          </CardActions>
        </CardContent>
        </div>
        </Card>
        <Card variant="outlined" sx={{ width: 365, height: 400, paddingTop: 8 }}>
        <div align="center" justifyContent="center">
        <Avatar
          alt="Knielson"
          src="/kevin.jpeg"
          sx={{ width: 230, height: 230 }}
        />
        <CardContent>
          <Typography align="center" fontFamily='Palatino-Bold' variant='h6'> Kevin Nielsen </Typography>
          <CardActions>
            <Link marginLeft="auto" href="https://github.com/knielsen24">
                <GitHubIcon sx={{ fontSize: "40px" }} style={{color: '#000000'}}/>
            </Link>
            <Link marginRight="auto" href="https://www.linkedin.com/in/kevin-nielsen-se/">
                <LinkedInIcon sx={{ fontSize: "40px" }}  style={{color: '#0e76a8'}}/>
            </Link>
          </CardActions>
        </CardContent>
        </div>
        </Card>
      </Stack>
      <Typography align="center" marginBottom={5} variant='h6' fontFamily='Palatino-Bold'> 
          Project Repository: &nbsp; <Link href = "https://github.com/knielsen24/fetch"> fetch </Link>
      </Typography>
      
    </div>
  )
}
