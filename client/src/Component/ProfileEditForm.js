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

   const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdateUserData({ ...updateUserData, [name]: value });
   };

   function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:4000/", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signUpData),
      })
         .then((r) => r.json())
         .then((user) => setUser(user))
         .then(navigate("findjobs"));
      // add error handing
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
                           type="first_name"
                           id="first_name"
                           name="first_name"
                           placeholder="First Name"
                           value={updateUserData.first_name}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           type="last_name"
                           id="last_name"
                           name="last_name"
                           placeholder="Last Name"
                           value={updateUserData.last_name}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           type="email"
                           id="email"
                           name="email"
                           placeholder="Email"
                           value={updateUserData.email}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           type="password"
                           id="password"
                           name="password"
                           placeholder="Password"
                           value={updateUserData.password}
                        />
                        <TextField
                           size="small"
                           fullWidth
                           type="password"
                           id="password_confirmation"
                           name="password_confirmation"
                           placeholder="Confirm Password"
                           value={updateUserData.password_confirmation}
                        />
                        <Button
                           disableElevation
                           fullWidth
                           variant="contained"
                           size="small"
                           type="submit"
                        >
                           Sign Up
                        </Button>
                        <h8> Already Have An Account?</h8>
                        <Button
                           fullWidth
                           disableElevation
                           variant="contained"
                           size="small"
                           type="click"
                        >
                           Sign In
                        </Button>
                     </Stack>
                  </Box>
               </form>
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
