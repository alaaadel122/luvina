import { useActionState } from "react";
import { Input } from "@/components/ui/input"
import googleIcon from '@/assets/images/google.png'
import facebookIcon from '@/assets/images/facebook.png'
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/Schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import  Loading from "@/components/Loading";
import {Link} from 'react-router-dom'

//asction function for useActionState
async function loginAction(prevState: any, formDate: FormData) {

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
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const [state, formAction, isPending] = useActionState(loginAction, null)
  return (
    <div className="w-[50%] flex flex-col  absolute top-50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(console.log)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    className="bg-white/20 border-white/20  placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Password field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white/80">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="bg-white/20 border-white/20  placeholder-white/50 rounded-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* Submit button */}
          <Button
            type="submit"
            disabled={isPending}
            className="bg-main-btn text-white w-full mt-5 px-1 py-1 "
          >
            {isPending ? <Loading/> : "Submit"}
          </Button>

        </form>
      </Form>
      <div className="flex items-center w-full mt-10 mx-auto">
        <hr className="flex-1 border-border" />
        <span className="px-3 text-sm font-light text-muted-foreground">OR</span>
        <hr className="flex-1 border-border" />
      </div>
      <div className="flex flex-row justify-between">
        <button className="flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition text-sm">
          <img src={googleIcon} className="w-5 h-5 mr-3" alt="Google Icon" />
          Sign in with Google
        </button>

        <button className="flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition text-sm">
          <img src={facebookIcon} className="w-5 h-5 mr-3 " alt="Facebook Icon" />
          Sign in with Facebook
        </button>
      </div>
      <p className="text-center text-sm pt-4 text-gray-600">Don't Have an account ?<span className="text-black  font-bold" ><Link to={'/signup'}> Register </Link></span></p>
    </div>
  )
}
