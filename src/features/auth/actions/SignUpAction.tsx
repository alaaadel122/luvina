import type { SignupSchemaValue } from '@/lib/Schemas/signupSchema';
import axios from 'axios';

type SignupActionState =
  | { ok: true }
  | { ok: false; message: string };

export default async function SignUpAction(
  prevState: unknown,
  data: SignupSchemaValue
): Promise<SignupActionState> {
  void prevState; // useActionState passes prevState, but we don't need it here
  try {
    const name = data.fullname;
    const email = data.email;
    const password = data.password;
    const rePassword = data.rePassword;
    const phone = data.phone;


    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      {
        name,
        email,
        password,
        rePassword,
        phone
      }
    );

    console.log("SUCCESS", res.data);
    return { ok: true };
  } catch (error: unknown) {
    let message = "Sign up failed";

    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      if (typeof responseData === "string") {
        message = responseData;
      } else if (responseData && typeof responseData === "object") {
        const obj = responseData as Record<string, unknown>;
        message =
          (typeof obj.message === "string" && obj.message) ||
          (typeof obj.error === "string" && obj.error) ||
          error.message;
      } else {
        message = error.message;
      }

      console.log("ERROR", responseData);
    } else if (error instanceof Error) {
      message = error.message;
    }

    return { ok: false, message };
  }
}
