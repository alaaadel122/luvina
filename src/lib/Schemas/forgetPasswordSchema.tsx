import z from "zod";

export const ForgetPasswordSchema  = z.object({
     email:z.string().email()
})
export type ForgetPasswordValue = z.infer<typeof ForgetPasswordSchema>