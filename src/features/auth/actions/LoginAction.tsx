import type { LoginSchemaValue } from "@/lib/Schemas/loginSchema";
import axios from "axios";

type LoginActionState =
  | { ok: true }
  | { ok: false; message: string };

export default async function LoginAction(
  prevState: unknown,
  data: LoginSchemaValue
): Promise<LoginActionState> {
  void prevState; // useActionState passes prevState, but we don't need it here
  try {
    const email = data.email;
    const password = data.password;

    console.log({ email, password }); 

    const res = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signin",
      {
        email,
        password,
      }
    );

    console.log("SUCCESS", res.data);
    return { ok: true };
  } catch (error: unknown) {
    let message = "Login failed";

    if (axios.isAxiosError(error)) {
      const responseData = error.response?.data;
      if (typeof responseData === "string") {
        message = responseData;
      } else if (responseData && typeof responseData === "object") {
        const obj = responseData as Record<string, unknown>;
        console.log("loginaction",obj)
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