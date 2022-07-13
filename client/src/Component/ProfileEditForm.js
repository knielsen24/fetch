import React, { useState } from "react";
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
   Stack,
   Box,
   TextField,
} from "@mui/material";

function ProfileEditForm({
   userId,
   first_name,
   last_name,
   email,
   image_url,
   resume,
   handleEditProfile,
}) {
   const initialUserData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      image_url: image_url,
   };

   const [updateUserData, setUpdateUserData] = useState(initialUserData);
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdateUserData({ ...updateUserData, [name]: value });
   };

   console.log(updateUserData);

   function handleSubmit(e) {
      e.preventDefault();
      console.log(updateUserData);

      // fetch(`/users/${userId}`, {
      //    method: "PATCH",
      //    headers: {
      //       "Content-Type": "application/json",
      //    },
      //    body: JSON.stringify(updateUserData),
      // })
      //    .then((r) => r.json())
      //    // .then((user) => setUser(user))
      //    // .then(navigate("findjobs"));
      // // add error handing
   }

   return (
      <>
         <Button
            disableElevation
            variant="contained"
            fullWidth
            size="small"
            onClick={handleClickOpen}
         >
            Edit Profile
         </Button>
         <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
         >
            <DialogTitle id="alert-dialog-title">{"Edit Profile"}</DialogTitle>
            <DialogContent>
               <form onSubmit={handleSubmit} onChange={handleChange}>
                  <Box sx={{ width: 300, margin: "auto" }}>
                     <Stack
                        spacing={2.5}
                        alignItems={"center"}
                        justifyContent={"center"}
                     >
                        <TextField
                           size="small"
                           fullWidth
                           id="first_name"
                           name="first_name"
                           defaultValue={first_name}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           id="last_name"
                           name="last_name"
                           defaultValue={last_name}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           type="email"
                           id="email"
                           name="email"
                           defaultValue={email}
                        />
                     </Stack>
                  </Box>
                  <DialogActions>
                     <Button onClick={handleClose}>Cancel</Button>
                     <Button
                        autoFocus
                        color="error"
                        onClick={() => {
                           handleClose();
                           // handleEditProfile(userId);
                        }}
                     >
                        Update Profile
                     </Button>
                  </DialogActions>
               </form>
            </DialogContent>
         </Dialog>
      </>
   );
}

export default ProfileEditForm;
