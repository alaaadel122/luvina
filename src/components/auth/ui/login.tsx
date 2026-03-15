import { useActionState } from "react";
import { Field, FieldDescription, FieldLabel, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import googleIcon from '@/assets/images/google.png'
import facebookIcon from '@/assets/images/facebook.png'
async function login(prevState: any, formDate: FormData) {
  const email = formDate.get('email');
  const password = formDate.get('password');
  if (email === 'alaa@gmail.com' && password === '123') {
    return {
      success: true,
      message: 'You signIn succeessfully'
    }
  }
  return {
    success: false,
    message: 'Email or password is incorrect'
  }
}

export default function Login() {
  const [state, formAction, isPending] = useActionState(login, null)
  return (
    <div className="w-[50%] flex flex-col  absolute top-50">
      <form className="w-full max-w-sm">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Username or Email</FieldLabel>
            <Input
              id="form-name"
              type="text"
              placeholder="someone@email.com"
              required
            />
          </Field>
        </FieldGroup>
        <FieldGroup className="pt-8">
          <Field>
            <FieldLabel htmlFor="form-name">Password</FieldLabel>
            <Input
              id="form-password"
              type="password"
              placeholder="at least 8 characters"
              required
            />
          </Field>
        </FieldGroup>
        <p className="font-light  text-small flex justify-end">Forget password ?</p>
        <button className="bg-main-btn text-white w-full mt-5 px-1 py-1"> Sign In</button>
      </form>
      <div className="flex items-center w-full mt-10 mx-auto">
        <hr className="flex-1 border-border" />
        <span className="px-3 text-sm font-light text-muted-foreground">OR</span>
        <hr className="flex-1 border-border" />
      </div>
      <div className="flex flex-row justify-between">
        <button className="flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition">
          <img src={googleIcon} className="w-5 h-5 " alt="Google Icon" />
          Sign in with Google
        </button>

        <button className="flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition text-small">
          <img src={facebookIcon} className="w-5 h-5 " alt="Facebook Icon" />
          Sign in with Facebook
        </button>
      </div>
    </div>
  )
}
