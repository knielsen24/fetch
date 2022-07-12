import React, { useState } from "react";
import {
   Stack,
   Card,
   CardContent,
   CardActions,
   Typography,
   Divider,
   Button,
   FormControl,
   Link
} from "@mui/material";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Link as RouterLink} from "react-router-dom"

export default function JobFeature({
   id,
   company_name,
   position,
   location,
   compensation,
   job_type,
   description,
   benefits,
   image
}) {
   const [like, setLike] = useState(false);
   const handleLike = () => setLike(!like);

   const renderLikeIcon = like ? <FavoriteIcon /> : <FavoriteBorderSharpIcon />;

   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const [clickThrough, setClickThrough] = useState('')

   const handleClickThrough = () => {
      fetch(`/companies/${id}`)
      .then((r) => {
         if (r.ok) {
            r.json().then((r) => setClickThrough(r));
         }
      });
   }

   console.log(clickThrough)

   return (
      <div>
         <Stack>
            <Card>
               <CardContent>
                  <Typography variant="h5" fontWeight={600}>
                     {position}
                  </Typography>
                  <Link 
                        onClick={handleClickThrough}
                        
                        underline="never"
                        fontFamily={"sans-serif"}
                        color={"primary"}
                        fontSize={36}
                        sx={{ textDecoration: "none" }}>
                        {company_name}
                  </Link>
                  <Typography>{location}</Typography>
                  <Typography>${compensation}</Typography>
                  <Typography>{job_type}</Typography>
                  <CardActions>
                     <Button onClick={handleOpen} variant="contained">
                        Apply Now
                     </Button>
                     <Dialog open={open} onClose={handleClose}>
                        <DialogTitle style={{ textAlign: "center" }}>
                           {" "}
                           Apply for the {position} position at {company_name}!
                        </DialogTitle>
                        <Divider />
                        <FormControl>
                           <Button
                              type="submit"
                              onClick={handleClose}
                              variant="contained"
                              size="small"
                           >
                              {" "}
                              Submit Application{" "}
                           </Button>
                        </FormControl>
                     </Dialog>
                     <IconButton onClick={handleLike}>
                        {renderLikeIcon}
                     </IconButton>
                  </CardActions>
                  <Divider />
                  <Typography variant="h6" fontWeight={600} padding="3px">
                     Job details
                  </Typography>
                  <Typography
                     variant="h8"
                     fontWeight={600}
                     display="block"
                     padding="2px"
                  >
                     Compensation
                  </Typography>
                  <Typography variant="h8" display="block" padding="3px">
                     ${compensation} a year
                  </Typography>
                  <Typography
                     variant="h8"
                     fontWeight={600}
                     display="block"
                     padding="2px"
                  >
                     Job Type
                  </Typography>
                  <Typography variant="h8" display="block" padding="5px">
                     {job_type}
                  </Typography>
                  <Divider />
                  <Typography
                     variant="h7"
                     fontWeight={600}
                     display="block"
                     padding="5px"
                  >
                     Benefits
                  </Typography>
                  <Typography padding="5px">{benefits}</Typography>
                  <Divider />
                  <Typography
                     variant="h7"
                     fontWeight={600}
                     display="block"
                     padding="5px"
                  >
                     Full Job Description
                  </Typography>
                  <Typography padding="5px">{description}</Typography>
               </CardContent>
            </Card>
         </Stack>
      </div>
   );
}
