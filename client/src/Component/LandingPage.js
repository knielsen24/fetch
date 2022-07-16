import React, { useState } from "react";
import { Button, Stack, Box, TextField, Divider } from "@mui/material";

export default function LandingPage({ onSetUser, navigate }) {
    const newUser = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        image_url: "",
    };

    const [signUpData, setSignUpData] = useState(newUser);
    const [errors, setErrors] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpData({ ...signUpData, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:4000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signUpData),
        }).then((r) => {
            if (r.ok) {
                r.json()
                    .then((user) => onSetUser(user))
                    .then(navigate("findjobs"));
            } else {
                r.json().then((errorData) => setErrors(errorData.errors));
            }
        });

        // r.json())
        // .then((user) => setUser(user))
        // .then(navigate("findjobs"));
        // add error handing
    }

    const ratio = 1.1;

    const imgWidth = (num) => 223.92 / num;
    const imgHeight = (num) => 294.4 / num;

    return (
        <>
            <div
                style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "fixed",
                    height: "80vh",
                    display: "flex",
                }}
            >
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-evenly"}
                    spacing={10}
                    sx={{
                        margin: "auto",
                    }}
                >
                    <img
                        style={{
                            width: `${imgWidth(ratio)}px`,
                            height: `${imgHeight(ratio)}px`,
                        }}
                        src="https://i.imgur.com/xYnM8Y6.png"
                        alt="create an account"
                    />
                    <img
                        style={{
                            width: `${imgWidth(ratio)}px`,
                            height: `${imgHeight(ratio)}px`,
                        }}
                        src="https://i.imgur.com/1NjO9rf.png"
                        alt="create an account"
                    />
                    <img
                        style={{
                            width: `${imgWidth(ratio)}px`,
                            height: `${imgHeight(ratio)}px`,
                        }}
                        src="https://i.imgur.com/PHXOSF9.png"
                        alt="create an account"
                    />

                    <Box
                        sx={{
                            width: 350,
                            height: 525,
                            backgroundColor: "white",
                            borderRadius: "8px",
                        }}
                    >
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            sx={{
                                color: "white",
                                background: "rgba(0, 224, 255, 1)",
                                width: 350,
                                height: 50,
                                borderTopLeftRadius: "8px",
                                borderTopRightRadius: "8px",
                                borderBottomLeftRadius: "0px",
                                borderBottomRightRadius: "0px",
                                marginBottom: 3,
                            }}
                        >
                            <h3>Create An Account</h3>
                        </Box>
                        <form onSubmit={handleSubmit} onChange={handleChange}>
                            <Box sx={{ width: 300, margin: "auto" }}>
                                <Stack
                                    spacing={2.5}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                >
                                    <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        type="first_name"
                                        id="first_name"
                                        name="first_name"
                                        placeholder="First Name"
                                        value={signUpData.first_name}
                                    />
                                    <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        type="last_name"
                                        id="last_name"
                                        name="last_name"
                                        placeholder="Last Name"
                                        value={signUpData.last_name}
                                    />
                                    <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        value={signUpData.email}
                                    />
                                    <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        value={signUpData.password}
                                    />
                                    <TextField
                                        required
                                        size="small"
                                        fullWidth
                                        type="password"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        placeholder="Confirm Password"
                                        value={signUpData.password_confirmation}
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
                                    {errors.length > 0 && (
                                        <div
                                            style={{
                                                color: "red",
                                                listStyleType: "none",
                                                textAlign: "center",
                                            }}
                                        >
                                            {errors.map((error) => (
                                                <p key={error}>{error}</p>
                                            ))}
                                        </div>
                                    )}
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
                    </Box>
                </Stack>
            </div>
        </>
    );
}
