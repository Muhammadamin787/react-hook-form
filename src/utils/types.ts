import { FormSchema } from "../components/Form/logic/MainFormProvider";
import { SocialNets } from "./constants"
import * as yup from "yup";

// Utilit types
type ValuesOf<T> = T[keyof T]

// Form types
export type FormSchemaType = yup.InferType<typeof FormSchema>
export type FormFields = {
    username: string
    email: string
    channel: string
    phones: [string, string]
    ketmon: {
        first: string
    }
    age: number
    phoneNumbers: {
        number: string
    }[]
}

// Social network types
export type SocialNetsNames = ValuesOf<typeof SocialNets>

// Payload Drawer Types
export type PayloadDrawerType = string | null;

// Technology types
export type TypeTechnology = {
    name: string,
    rate?: number
}