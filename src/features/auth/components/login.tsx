import { startTransition, useActionState } from "react";
import { Input } from "@/components/ui/input"

import { useForm } from "react-hook-form";
import { LoginSchema } from "@/lib/Schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Loading from "@/components/shared-component/Loading";
import LoginAction from "../actions/LoginAction";
import LinksAuth from "../_components/linksAuth";


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
     <LinksAuth type="login"/>
    </div>
  )
}
