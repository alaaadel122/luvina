import type { ForgetPasswordValue } from "@/lib/Schemas/forgetPasswordSchema";
import axios from "axios";
type ForgetPassActionState =
     | { ok: true }
     | { ok: false; message: string };

export default async function ForgetPasswordAction(
     prevState: unknown,
     data: ForgetPasswordValue
): Promise<ForgetPassActionState> {
     void prevState;
     try {
          const email = data.email;
          const res = await axios.post(
               "https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords",
               {
                    email
               }
          )
          console.log("SUCCESS", res.data);
          return { ok: true };
     } catch (error: unknown) {
          let message = "Something wrong happened"
          if (axios.isAxiosError(error)) {
               const responseData = error.response?.data;
               if (typeof responseData === 'string') {
                    message = responseData
               } else if (responseData && typeof responseData === 'object') {
                    const obj = responseData as Record<string, unknown>;
                    console.log("forgetaction", obj)

                    message = (typeof obj.message === 'string' && obj.message) ||
                         (typeof obj.error === 'string' && obj.error) ||
                         error.message;
               } else {
                    message = error.message
               }
          } else if (error instanceof Error) {
               message = error.message
          }
          return { ok: false, message };
     }
}


