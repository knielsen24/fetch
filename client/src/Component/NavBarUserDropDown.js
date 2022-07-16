import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Divider, Link, Menu, MenuItem } from "@mui/material";
import startCase from "lodash.startcase";

function NavBarUserDropDown({ user, handleProfilePage, handleSignOut }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (e) => setAnchorEl(e.currentTarget);
    const handleClose = () => setAnchorEl(false);

    // when the user is signed in it renders dropDownMenu
    // when the user is signed out it renders signInLink
    const dropDownMenu = (
        <>
            <Link
                underline="hover"
                color={"black"}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                {user ? startCase(user.first_name) : null}
            </Link>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem
                    component={RouterLink}
                    to="/profile"
                    onClick={() => {
                        handleClose();
                        handleProfilePage(user.id);
                    }}
                >
                    Profile
                </MenuItem>
                {/* <MenuItem
               component={RouterLink}
               to="/myjobs"
               onClick={() => {
                  handleClose();
               }}
            >
               My Jobs
            </MenuItem>
            <MenuItem
               component={RouterLink}
               to="/myreviews"
               onClick={() => {
                  handleClose();
               }}
            >
               My Reviews
            </MenuItem> */}
                {/* <MenuItem component={RouterLink} to="/settings">Settings</MenuItem> */}
                {/* css needs polishing */}
                <Divider fullWidth />
                <MenuItem
                    onClick={() => {
                        handleSignOut();
                        handleClose();
                    }}
                >
                    Sign Out
                </MenuItem>
            </Menu>
        </>
    );

    const signInLink = (
        <Link
            component={RouterLink}
            to="/signin"
            underline="hover"
            color={"black"}
        >
            Sign In
        </Link>
    );

    return <>{user ? dropDownMenu : signInLink}</>;
}

export default NavBarUserDropDown;
