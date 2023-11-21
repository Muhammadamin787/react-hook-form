
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, FormControl, FormHelperText, FormLabel, Stack, TextField } from '@mui/material';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { FormSchemaType, TypeTechnology } from '../../../utils/types';

const initialTechnology: TypeTechnology = {
     name: "",
}
const FormTechnologies = () => {

     // Form Hooks
     const { control, setError, clearErrors, formState: { errors } } = useFormContext<FormSchemaType>()
     const { fields: technologies, append, remove } = useFieldArray<FormSchemaType, "technologies">({
          name: "technologies",
          control,
     })

     // Functions
     const technologyErrors = errors.technologies || []

     const onAdd = () => {
          clearErrors("technologies")
          append(initialTechnology)
     }

     return (
          <FormControl component="fieldset">
               <Stack gap={1}>
                    <FormLabel sx={{ marginBottom: "2px" }}>Your skills</FormLabel>
                    {
                         technologies.map((technology, index) => (
                              <Stack key={index}>
                                   <Stack key={technology.id} mb={"4px"} direction="row" gap={1} sx={{ border: "1px solid ed" }}>
                                        <Controller
                                             name={`technologies.${index}.name`}
                                             control={control}
                                             render={({ field, fieldState: { error } }) =>
                                                  <TextField
                                                       size='small'
                                                       label="Technology"
                                                       sx={{ width: "170px" }}
                                                       error={!!error}
                                                       {...field}
                                                  />
                                             } />
                                        <Controller
                                             name={`technologies.${index}.rate`}
                                             control={control}
                                             render={({ field }) =>
                                                  <TextField
                                                       type="number"
                                                       size='small'
                                                       label="Rate"
                                                       sx={{ width: "70px" }}
                                                       {...field}
                                                       onChange={(e) => {
                                                            const value = e.target.value
                                                            const valueInt = !isNaN(parseInt(value)) ? parseInt(value) : 0

                                                            if (valueInt > 10 || valueInt <= 0) {
                                                                 console.log("11", valueInt);
                                                                 setError(`technologies.${index}.rate`, { message: "min 0 and max=10" })
                                                                 return field.onChange()
                                                            } else {
                                                                 console.log({ valueInt });
                                                                 setError(`technologies.${index}.rate`, {})
                                                                 return field.onChange(valueInt)
                                                            }
                                                       }}
                                                       InputProps={{
                                                            inputProps: {
                                                                 min: 0,
                                                                 max: 10
                                                            }
                                                       }}
                                                  />
                                             } />
                                        <Button onClick={() => remove(index)} variant='outlined' size='small'>
                                             <DeleteIcon />
                                        </Button>
                                   </Stack>
                                   <FormHelperText error={!!technologyErrors[index] || "root" in technologyErrors}>
                                        {"root" in technologyErrors ? technologyErrors?.root?.message : ""}
                                        {technologyErrors[index]?.name?.message}
                                        {technologyErrors[index]?.rate?.message}
                                   </FormHelperText>
                              </Stack>
                         ))
                    }
               </Stack>
               <Button
                    sx={{ marginBlockStart: "9px" }}
                    onClick={onAdd}
                    disabled={technologies.length > 4}
                    variant='outlined'>Add {technologies.length > 4 ? " (reached max = 5)" : ""}</Button>
          </FormControl>
     )
}

export default FormTechnologies