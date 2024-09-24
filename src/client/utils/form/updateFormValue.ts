import { Dispatch, SetStateAction } from "react"

const updateFormValue = <T>(form : T, set: Dispatch<SetStateAction<T>>) => 
  (key: keyof T, event: React.ChangeEvent<HTMLInputElement>) => {
    set({ ...form, [key]: event.target.value })
  }

export default updateFormValue
