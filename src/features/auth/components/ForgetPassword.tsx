import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ForgetPasswordSchema } from '@/lib/Schemas/forgetPasswordSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { startTransition, useActionState } from 'react'
import { useForm } from 'react-hook-form'
import ForgetPasswordAction from '../actions/ForgetPassword'
import Loading from '@/components/shared-component/Loading'

export default function ForgetPassword() {
     const form = useForm({
          resolver: zodResolver(ForgetPasswordSchema),
          defaultValues: {
               email: ''
          },
          mode: 'onChange'

     })
     const [state, formAction, isPending] = useActionState(ForgetPasswordAction, null)

     return (
          <div className='flex flex-col absolute top-50 w-[50%]'>
               <p className='text-center text-gray-600 font-bold'>Enter Your Email</p>
               <Form {...form}>
                    <form onSubmit={form.handleSubmit((data) => {
                         startTransition(() => {
                              formAction(data)
                         })
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
                         <Button
                              type="submit"
                              className="bg-[#333333] text-white w-full mt-5 px-1 py-1 "
                         >

                              {isPending ? <Loading /> : " Send Code"}
                         </Button>
                    </form>

               </Form>
          </div>
     )
}
