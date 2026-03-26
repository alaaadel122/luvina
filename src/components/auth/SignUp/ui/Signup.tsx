import Loading from '@/components/Loading'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import googleIcon from '@/assets/images/google.png'
import facebookIcon from '@/assets/images/facebook.png'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '@/lib/Schemas/signupSchema'
import SignUpAction from '../api/SignUpAction'


export default function Signup() {
  const [state, formAction, isPending] = useActionState(SignUpAction, null)
  const form = useForm({
    resolver: zodResolver(SignupSchema),
    defaultValues: {
      fullname: '',
      phone: '',
      email: '',
      password: '',
      rePassword: ''
    },
    mode: 'onChange'
  })
  return (
    <div className="w-[50%] flex flex-col  absolute top-40">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => {

          startTransition(() => {
            formAction(data);
          });
        })}>
          {/* full name feild */}
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-2'>Full name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="off"
                    className="bg-white/20  border-gray-400  placeholder-white/50 rounded-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          {/* phone number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-2'>Number</FormLabel>
                <FormControl>
                  <Input
                    type="phone"
                    placeholder="Enter your number"
                    autoComplete="off"
                    className="bg-white/20  border-gray-400  placeholder-white/50 rounded-sm "
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          {/* email feild */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-2'>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="off"
                    className="bg-white/20  border-gray-400  placeholder-white/50 rounded-sm"
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
                <FormLabel className='mt-2'>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="At least 8 characters"
                    className="bg-white/20  border-gray-400  placeholder-white/50 rounded-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          {/* confirm Password field */}
          <FormField
            control={form.control}
            name="rePassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='mt-2'>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="At least 8 characters"
                    className="bg-white/20  border-gray-400  placeholder-white/50 rounded-sm"
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
            {isPending ? <Loading /> : "Submit"}
          </Button>

        </form>
      </Form>

      <div className="flex flex-row justify-between mt-3">
        <button className="w-full flex items-center border-2 rounded-2xl px-2 py-2 hover:bg-gray-100 transition text-sm whitespace-nowrap">
          <img src={googleIcon} className="w-5 h-5 mx-1" alt="Google Icon" />
          Sign in with Google
        </button>

        <button className=" w-full flex items-center border-2 rounded-2xl pe-5 py-2 hover:bg-gray-100 transition text-sm whitespace-nowrap">
          <img src={facebookIcon} className="w-5 h-5 mx-1 " alt="Facebook Icon" />
          Sign in with Facebook
        </button>
      </div>
      <div className="flex items-center w-full mt-10 mx-auto">
        <hr className="flex-1 border-border" />
        <span className="px-3 text-sm font-light text-muted-foreground">OR</span>
        <hr className="flex-1 border-border" />
      </div>
      <p className="text-center text-sm pt-4 text-gray-600 mb-5">Already have an account? <span className="text-black  font-bold" ><Link to={'/'}> SignIn </Link></span></p>
    </div>
  )
}
