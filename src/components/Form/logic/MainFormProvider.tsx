import { yupResolver } from "@hookform/resolvers/yup";
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from "yup";
import { FormSchemaType } from "../../../utils/types";
import { SocialNets } from "../../../utils/constants";

// Schema
const socialNetValues = Object.values(SocialNets)

const technology = yup.object({
     name: yup.string().uppercase().required("Technology name must not be empty!"),
     rate: yup.number().min(0, "min = 0").max(10, "max = 10")
})

const socialNets = yup.string().oneOf(socialNetValues).required()

export const FormSchema = yup.object({
     username: yup.string().required(),
     email: yup.string().email("Invalid email!").required(),
     gender: yup.number().oneOf([1, 2]).required(),
     social_nets: yup.array(socialNets).required().min(2, "You must select at least 2 social networks!"),
     technologies: yup.array(technology).required().min(2, "You must add at least 2 technologies!"),
     password: yup.string().required().min(3).max(6),
     confirm_password: yup
          .string()
          .oneOf([yup.ref("password")], "Passwords mismatch!")
          .required()
          .min(3)
          .max(6),
});

// Config
const formConfig = {
     defaultValues: {
          username: "",
          email: "",
          gender: 1,
          social_nets: [],
          password: "",
          confirm_password: "",
          technologies: [{
               name: "HTML",
               rate: 10
          }]
     },
     resolver: yupResolver(FormSchema)
}

// Provider
const MainFormProvider = ({ children }: PropsWithChildren) => {

     // Form Hooks
     const methods = useForm<FormSchemaType>(formConfig);

     return (
          <FormProvider {...methods}>
               {children}
          </FormProvider>
     )
}

export default MainFormProvider;