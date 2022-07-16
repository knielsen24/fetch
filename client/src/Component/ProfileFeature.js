import React from "react";
import {
    Stack,
    Box,
    Paper,
    Typography,
    Button,
    Divider,
    List,
    ListItemAvatar,
    ListItemIcon,
    ListItemText,
    ListItem,
} from "@mui/material";
import Image from "mui-image";
import ProfileDeleteModal from "./ProfileDeleteModal";
import ProfileEditForm from "./ProfileEditForm";
import EmailIcon from "@mui/icons-material/Email";
import BusinessIcon from "@mui/icons-material/Business";
import startCase from "lodash.startcase";
import ResumeUpload from "./ResumeUpload";

function ProfileFeature({ user, handleDeleteProfile, onSetUser }) {
    // set default profile picture to profile icon

    return (
        <Box display={"flex-column"} borderRadius={"8px"}>
            <Stack
                spacing={0}
                alignItems={"center"}
                justifyContent={"flex-start"}
            >
                <Image
                    duration={0}
                    shift={0}
                    src={user.image_url}
                    fit="cover"
                    showLoading="false"
                    height={"20vh"}
                    sx={{
                        borderTopLeftRadius: "2px",
                        borderTopRightRadius: "2px",
                    }}
                />
                <Paper
                    elevation={7}
                    sx={{
                        margin: 0,
                        background: "rgba(0, 133, 255, 1)",
                        width: "40vw",
                        height: "5vh",
                        borderRadius: 0,
                        textAlign: "center",
                    }}
                >
                    <Typography color={"whitesmoke"} variant="h5">
                        {startCase(user.first_name + " " + user.last_name)}
                    </Typography>
                </Paper>
                <Box sx={{ width: "37vw", margin: "auto" }}></Box>
            </Stack>
            <Stack justifyContent={"flex-end"}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={user.email}
                            secondary="Email"
                        ></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={"null"}
                            secondary="Resume"
                        ></ListItemText>
                    </ListItem>
                </List>

                <Stack
                    margin={"auto"}
                    spacing={2}
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ position: "absolute", top: "70vh", right: 25 }}
                >
                    <ResumeUpload {...user} onSetUser={onSetUser} />
                    <ProfileEditForm {...user} onSetUser={onSetUser} />
                    <ProfileDeleteModal
                        handleDeleteProfile={handleDeleteProfile}
                        userId={user.id}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}

export default ProfileFeature;
