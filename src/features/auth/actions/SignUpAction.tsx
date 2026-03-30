import type { SignupSchemaValue } from '@/lib/Schemas/signupSchema';
import axios from 'axios';

export default async function SignUpAction(prevState: any, data:SignupSchemaValue) {
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
  } catch (error: any) {
    console.log("ERROR", error.response?.data);
    return error;
  }
}
