import FormGenderRadios from './FormGenderRadios'
import FormInput from '../formComponents/FormInput'
import { FormControl, FormLabel } from '@mui/material'

const FormPersonalInputs = () => {
     return (
          <FormControl component="fieldset" className="mui-form__personal">
               <FormLabel>
                    Personal fields
               </FormLabel>
               <FormInput
                    name="username"
                    label="Username"
                    accessibility={{
                         "aria-label": "Input field",
                         "aria-describedby": "Name of user",
                    }}
               />
               <FormInput
                    name="email"
                    label="Email"
                    accessibility={{
                         "aria-label": "Input field",
                         "aria-describedby": "Email of user",
                    }}
               />
               <FormInput
                    type="password"
                    name="password"
                    label="Password"
                    accessibility={{
                         "aria-label": "Input field",
                         "aria-describedby": "Password of user",
                    }}
               />
               <FormInput
                    type="password"
                    name="confirm_password"
                    label="Confirm Password"
                    accessibility={{
                         "aria-label": "Input field",
                         "aria-describedby": "Password of user",
                    }}
               />
               <FormGenderRadios
                    name="gender"
                    label="Gender"
                    aria-labelledby="gender-radio-id"
                    radios={[
                         { value: 1, label: "Male" },
                         { value: 2, label: "Female" },
                    ]}
                    sx={{
                         gap: "20px",
                    }}
               />
          </FormControl>
     )
}

export default FormPersonalInputs