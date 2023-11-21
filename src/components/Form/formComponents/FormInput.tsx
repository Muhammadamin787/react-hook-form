import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import React from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { FormSchemaType } from "../../../utils/types";

type FormInputProps = {
    name: keyof FormSchemaType
    label: string
    size?: TextFieldProps["size"]
    type?: React.InputHTMLAttributes<unknown>["type"]
    rules?: RegisterOptions
    accessibility?: Record<string, string>
}

const FormInput = ({ name, label, type, rules, size = "small", accessibility }: FormInputProps) => {

    // Form Hooks
    const { control } = useFormContext()

    return (
        <Controller
            name={name}
            rules={rules}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    id={label}
                    type={type}
                    InputProps={{
                        inputProps: {
                            "aria-label": label,
                            ...accessibility,
                        }
                    }}
                    size={size}
                    label={label}
                    error={!!error}
                    helperText={error?.message || ""}
                    {...{ onChange, value }}
                />
            )}
        />
    )
}
export default FormInput
