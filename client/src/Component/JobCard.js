import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";
import startCase from "lodash.startcase";

export default function JobCard({
    id,
    company_name,
    position,
    location,
    compensation,
    job_type,
    user,
    handleClick,
}) {
    return (
        <div>
            <Card
                elevation={5}
                sx={{
                    width: "37vw",
                    margin: "auto",
                    borderStyle: "solid",
                    borderWidth: "thin",
                }}
            >
                <CardContent onClick={() => handleClick(id)}>
                    <Typography variant="h6">{startCase(position)}</Typography>
                    <Typography>{company_name}</Typography>
                    <Typography>{location}</Typography>
                    <Typography>${compensation}</Typography>
                    <Typography>{job_type}</Typography>
                </CardContent>
            </Card>
        </div>
    );
}
