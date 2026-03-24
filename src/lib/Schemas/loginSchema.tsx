import * as z from "zod";

export const LoginSchema = z.object({
     email:z.string().email('Email Not Valid'),
     password:z.string().min(8,'Password is Too short')
})
export type LoginSchemaValue = z.infer<typeof LoginSchema>