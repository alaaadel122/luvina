import type { LoginSchemaValue } from "@/lib/Schemas/loginSchema";
import axios from "axios";

export default async function LoginAction(prevState: any, data:LoginSchemaValue) {
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
  } catch (error: any) {
    console.log("ERROR", error.response?.data);
    return error;
  }
}