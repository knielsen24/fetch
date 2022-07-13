import React from 'react'
import { Avatar, Stack, Card, Typography, Link, CardContent} from '@mui/material'

export default function AboutUs() {
  return (
    <div>
      <Typography> About Us </Typography>
      <Stack direction= 'row'>
        <Card variant="outlined">
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 150, height: 150 }}
        />
        <CardContent>
          <Typography>  Daniel Chan </Typography>
          <Link display="block"> Github </Link>
          <Link> LinkedIn </Link>
        </CardContent>
        </Card>
        <Card variant="outlined">
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 56, height: 56 }}
        />
        <CardContent>
          <Typography>  Christian Stringham </Typography>
          <Link display="block"> Github </Link>
          <Link> LinkedIn </Link>
        </CardContent>
        </Card>
        <Card variant="outlined">
        <Avatar
          alt="Remy Sharp"
          src=""
          sx={{ width: 56, height: 56 }}
        />
        <CardContent>
          <Typography> Kevin Nielson </Typography>
          <Link display="block"> Github </Link>
          <Link> LinkedIn </Link>
        </CardContent>
        </Card>
      </Stack>
      
    </div>
  )
}
