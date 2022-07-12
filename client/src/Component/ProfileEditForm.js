import React, { useState } from "react";
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
} from "@mui/material";

function ProfileEditForm({
   id,
   first_name,
   last_name,
   email,
   image_url,
   resume,
   handleEditProfile,
}) {
   const initialUserData = {
      first_name: "",
      last_name: "",
      email: "",
      image_url: "",
   };

   const [updateUserData, setUpdateUserData] = useState(initialUserData);

   const [open, setOpen] = useState(false);

   const handleClickOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

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
            <DialogTitle id="alert-dialog-title">
               {"Are you sure you want to delete your profile?"}
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  Deleting your profile will permanently remove any associated
                  information and your account will not be recoverable.
                  <br />
                  <br />
                  Click cancel to go back to your profile.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button
                  autoFocus
                  color="error"
                  onClick={() => {
                     handleClose();
                     handleEditProfile(id);
                  }}
               >
                  Update Profile
               </Button>
            </DialogActions>
         </Dialog>
      </>
   );
}

export default ProfileEditForm;
