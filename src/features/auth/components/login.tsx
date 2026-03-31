import { startTransition, useActionState } from "react";
import { Input } from "@/components/ui/input"
import googleIcon from '@/assets/images/google.png'
import facebookIcon from '@/assets/images/facebook.png'
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/Schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared-component/Loading";
import { Link } from 'react-router-dom'
import LoginAction from "../actions/LoginAction";


//asction function for useActionState


export default function Login() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  })
  const [state, formAction, isPending] = useActionState(LoginAction, null)
  console.log("====", state)
  return (
    <div className="w-[50%] flex flex-col  absolute top-50">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => {
          startTransition(() => {
            formAction(data);
          });
        })}>
          {state && !state.ok && (
            <p className="text-red-500 text-sm mb-3">{state.message}</p>
          )}
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
                    className="bg-white/20 border-white/20  placeholder-white/50 rounded-sm"
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
                    className="bg-white/20 border-white/20  placeholder-white/50 rounded-sm"
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
            className="bg-main-btn text-white w-full mt-5 px-1 py-1 "
          >
            {isPending ? <Loading /> : "Submit"}
          </Button>

        </form>
      </Form>
      <div className="flex items-center w-full mt-10 mx-auto">
        <hr className="flex-1 border-border" />
        <span className="px-3 text-sm font-light text-muted-foreground">OR</span>
        <hr className="flex-1 border-border" />
      </div>
      <div className="flex flex-row justify-between">
        <button className="w-full flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition text-sm whitespace-nowrap">
          <img src={googleIcon} className="w-5 h-5 mx-1" alt="Google Icon" />
          Sign in with Google
        </button>

        <button className=" w-full flex items-center border-2 rounded-2xl pe-5 py-2 hover:bg-gray-100 transition text-sm whitespace-nowrap">
          <img src={facebookIcon} className="w-5 h-5 mx-1 " alt="Facebook Icon" />
          Sign in with Facebook
        </button>
      </div>
      <p className="text-center text-sm pt-4 text-gray-600">Don't Have an account ?<span className="text-black  font-bold" ><Link to={'/signup'}> Register </Link></span></p>
    </div>
  )
}
