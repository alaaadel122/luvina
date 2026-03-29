import * as z from 'zod';
export const SignupSchema = z.object({
    fullname:z.string().min(5,'full name is too Short'),
    email:z.string().email(),
    phone:z.string(),
    password:z.string().min(8,'At least 8 characters'),
    rePassword:z.string().min(8,'At least 8 character')
})

export type SignupSchemaValue = z.infer<typeof SignupSchema>