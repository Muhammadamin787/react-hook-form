import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormSchemaType } from "../../../utils/types";

export function useMainForm(setPayload: (json: string) => void) {

     // Form Hooks
     const { handleSubmit, control, reset } = useFormContext<FormSchemaType>();

     // Functions
     const onSubmit = useCallback((e: FormSchemaType) => {
          setPayload(JSON.stringify(e, null, 4))
     }, [setPayload])

     return { handleSubmit, control, onSubmit, reset }
}
