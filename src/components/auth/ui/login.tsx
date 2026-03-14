import { useActionState } from "react";

async function login(prevState:any,formDate:FormData) {
  const email = formDate.get('email');
  const password = formDate.get('password');
  if(email === 'alaa@gmail.com' && password === '123'){
    return {
      success:true,
      message:'You signIn succeessfully'
    }
  }
    return{
      success:false,
      message:'Email or password is incorrect'
    }
  }

export default function Login() {
  const [state , formAction ,isPending] = useActionState(login,null)
  return (
    <div className="w-[50%] flex flex-col justify-center items-center border-2 rounded-2xl border-gray-700">
      <h2 className="text-2xl text-blue-800">Login</h2>
      <form action={formAction} className="flex flex-col   justify-center items-center gap-4 w-full p-7">
        <input className="border-2 border-blue-900 rounded-2xl w-full p-1" placeholder="Enter Your Email" name='email' type="email"/>
        {/* <input className="border-2 border-blue-900  rounded-2xl w-full p-1" placeholder="Enter YourPassword" name='password' type="password"/> */}
        <button disabled={isPending} className="rounded-2xl bg-blue-950 p-1 text-white w-full">
          {isPending ? 'Submitting' : 'Submit'}
        </button>
        {state?.success ? <p className="text-green-700">{state?.message}</p> : <p className="text-red-700">{state?.message}</p>}
      </form>
    </div>
  )
}
