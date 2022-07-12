import React, { useState } from "react"
import {
   Button,
   Dialog,
   DialogTitle,
   DialogContent,
   DialogContentText,
   DialogActions,
} from "@mui/material";

function ProfileDeleteModal({ userId, handleDeleteProfile }) {
   const [open, setOpen] = useState(false);

   const handleClickOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div>
         <Button variant="contained" color="error" fullwidth size="small" onClick={handleClickOpen}>
            Delete Profile
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
                  By clicking confirm, this will permanently delete your profile
						and your data will not be recoverable.
						Click cancel to go back to your profile.
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={handleClose}>Cancel</Button>
               <Button onClick={() => {handleClose()
					handleDeleteProfile(userId)}} autoFocus>
                  Confirm
               </Button>
            </DialogActions>
         </Dialog>
      </div>
   );
}

export default ProfileDeleteModal;
