/** @format */

import {
    Checkbox,
    CheckboxProps,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    FormLabel,
} from "@mui/material";
import { useState } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { FormSchemaType, SocialNetsNames } from "../../../utils/types.ts";

type SocialMediasProps = CheckboxProps & {
    label: string;
    name: keyof FormSchemaType;
    checkboxes: Array<{ name: SocialNetsNames; label: string }>;
};

const FormSocialMedias = ({
    label,
    name,
    checkboxes,
    ...props
}: SocialMediasProps) => {

    // Form Hooks
    const { control } = useFormContext();
    const { field, fieldState: { error } } = useController({ control, name });

    // States
    const [selected, setSelected] = useState<SocialNetsNames[]>(
        field.value || []
    );

    return (
        <FormControl component="fieldset" sx={{ border: "1px solid ed" }}>
            <FormLabel component="legend" id={props["aria-labelledby"]} sx={{ whiteSpace: "nowrap" }}>
                {label}
            </FormLabel>
            <FormGroup>
                {checkboxes.map((checkbox) => {
                    return (
                        <Controller
                            control={control}
                            name={name}
                            key={checkbox.name}
                            render={({ field: { onChange } }) => {
                                return (
                                    <FormControlLabel
                                        label={checkbox.label}
                                        key={checkbox.name}
                                        control={
                                            <Checkbox
                                                size="small"
                                                checked={field.value.includes(checkbox.name)}
                                                onChange={() => {
                                                    let updated = selected.slice();

                                                    if (updated.includes(checkbox.name)) {
                                                        updated = updated.filter(
                                                            (one) => one !== checkbox.name
                                                        );
                                                    } else {
                                                        updated.push(checkbox.name);
                                                    }

                                                    setSelected(updated);
                                                    onChange(updated)
                                                }}
                                                name={checkbox.name}
                                            />
                                        }
                                    />
                                );
                            }}
                        />
                    );
                })}
            </FormGroup>
            <FormHelperText sx={{ color: "red", margin: 0 }}>{error?.message}</FormHelperText>
        </FormControl>
    );
};
export default FormSocialMedias;
