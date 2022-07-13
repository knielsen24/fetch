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
   id,
   first_name,
   last_name,
   email,
   image_url,
   resume,
   onSetUser,
}) {
   const initialUserData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      image_url: image_url,
   };

   console.log(id)
   const [updateUserData, setUpdateUserData] = useState(initialUserData);
   const [open, setOpen] = useState(false);
   const [error, setError] = useState([])

   const handleClickOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdateUserData({ ...updateUserData, [name]: value });
   };

   function handleSubmit(e) {
      e.preventDefault();
      const newUserData = {
         first_name: updateUserData.first_name,
         last_name: updateUserData.last_name,
         email: updateUserData.email,
         image_url: updateUserData.image_url,
      };

      fetch(`/users/${id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(updateUserData),
      })
      .then((r) => {
         if (r.ok) {
            r.json().then((user) => onSetUser(user))
         } else {
            r.json().then((errorData) => setError(errorData.error))
         }
      })
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
                        <label>First Name</label>
                        <TextField
                           size="small"
                           fullWidth
                           id="first_name"
                           name="first_name"
                           value={updateUserData.first_name}
                        />
                        <label>Last Name</label>
                        <TextField
                           size="small"
                           fullWidth
                           id="last_name"
                           name="last_name"
                           value={updateUserData.last_name}
                        />
                        <label>Email</label>
                        <TextField
                           size="small"
                           fullWidth
                           type="email"
                           id="email"
                           name="email"
                           value={updateUserData.email}
                        />
                        <label>image_url</label>
                        <TextField
                           size="small"
                           fullWidth
                           id="image_url"
                           name="image_url"
                           value={updateUserData.image_url}
                        />
                     </Stack>
                  </Box>
                  <DialogActions>
                     <Button onClick={handleClose}>Cancel</Button>
                     <Button
                        autoFocus
                        type="submit"
                        onClick={() => {
                           handleClose();
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
