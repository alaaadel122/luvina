import Loading from '@/components/shared-component/Loading'
import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { SignupSchema } from '@/lib/Schemas/signupSchema'
import SignUpAction from '../actions/SignUpAction'
import LinksAuth from '../_components/linksAuth'


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
        <form
          onSubmit={form.handleSubmit((data) => {

            startTransition(() => {
              formAction(data);
            });
          })}
        >
          {state && !state.ok && (
            <p className="text-red-300 text-sm mb-3">{state.message}</p>
          )}
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
            <LinksAuth type='signup'/>
      
    </div>
  )
}
