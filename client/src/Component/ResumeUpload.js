import * as React from "react";
import { Button } from "@mui/material";

export default function ResumeUpload({ resume, onSetUser }) {
    console.log(resume);

    const resumeText = resume ? "Update Your Resume" : "Upload Your Resume";

    return (
        <>
            <Button component="label" color="primary">
                {" "}
                Upload Your Resume
                <input type="file" hidden />
            </Button>
        </>
    );
}
