import {Controller, useFormContext} from "react-hook-form";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, RadioGroupProps} from "@mui/material";

type GenderPropsProps = {
    label: string
    name: string
    "aria-labelledby": string
    radios: Array<{ value: number, label: string }>
}
const FormGenderRadios = ({label, name, radios, ...props}: RadioGroupProps & GenderPropsProps) => {

    // Form Hooks
    const {control} = useFormContext()

    return (
        <FormControl>
            <FormLabel id={props["aria-labelledby"]}>{label}</FormLabel>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value}}) => {
                    return (
                        <RadioGroup row {...props} onChange={onChange} value={value}>
                            {
                                radios.map(radio =>
                                    <FormControlLabel
                                        value={radio.value}
                                        key={radio.value}
                                        control={<Radio size="small"/>}
                                        label={radio.label}/>
                                )
                            }
                        </RadioGroup>
                    )
                }}
            />
        </FormControl>
    )
}
export default FormGenderRadios
