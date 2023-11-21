/** @format */

import { DevTool } from "@hookform/devtools";
import SendIcon from '@mui/icons-material/Send';
import { Button, Stack } from "@mui/material";
import { Fragment, memo } from 'react';
import { checkboxes } from "../../utils/constants.ts";
import "./form.scss";
import FormPersonalInputs from "./formSections/FormPersonalInputs.tsx";
import FormSocialMedias from "./formSections/FormSocialMedias.tsx";
import FormTechnologies from "./formSections/FormTechnologies.tsx";
import { useMainForm } from "./logic/useMainForm.ts";

type MuiFormProps = {
    setPayload: (p: string) => void
}

const MuiForm = ({ setPayload }: MuiFormProps) => {

    // Form Hooks
    const { handleSubmit, onSubmit, control, reset } = useMainForm(setPayload)

    return (
        <Fragment>
            <div className="mui-form__container">
                <h2>MUI & React-Hook-Form & Yup</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="mui-form" noValidate>
                    <div className="mui-form__body">
                        <FormPersonalInputs />
                        <FormSocialMedias
                            name="social_nets"
                            label="Social networks you use"
                            checkboxes={checkboxes}
                        />
                        <FormTechnologies />
                    </div>
                    <Stack direction="row" width="90%" sx={{ padding: "0 30px" }}>
                        <Stack width="33.33%" direction="row" gap={1}>
                            <Button variant="outlined" onClick={() => reset()}>
                                Reset Form
                            </Button>
                        </Stack>
                        <Stack width="33.33%">
                            <Button
                                sx={{ width: "200px", margin: "auto" }}
                                variant="contained"
                                type="submit"
                                endIcon={<SendIcon />}>
                                Submit
                            </Button>
                        </Stack>
                        <Stack width="33.33%"></Stack>
                    </Stack>
                </form>
            </div>
            <DevTool control={control} />
        </Fragment>
    );
};

export default memo(MuiForm);