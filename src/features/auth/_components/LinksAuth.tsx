import { Link } from 'react-router'
import googleIcon from '@/assets/images/google.png'
import facebookIcon from '@/assets/images/facebook.png'
type AuthSwitchProps = {
     type: 'login' | 'signup'
}
export default function LinksAuth({ type }: AuthSwitchProps) {
     return (
          <>
               <div className="flex flex-col lg:flex-row gap-3 w-full mt-5">
                    <button  className="w-full  flex items-center justify-center border-2 rounded-2xl px-2 py-2 text-sm">
                         <img src={googleIcon} className="w-5 h-5 mx-1" alt="Google Icon" />
                         Sign in with Google
                    </button>

                    <button  className="w-full flex items-center justify-center border-2 rounded-2xl px-2 py-2 text-sm">
                         <img src={facebookIcon} className="w-5 h-5 mx-1 " alt="Facebook Icon" />
                         Sign in with Facebook
                    </button>
               </div>
               <div className="flex items-center w-full mt-10 mx-auto">
                    <hr className="flex-1 border-border" />
                    <span className="px-3 text-sm font-light text-muted-foreground">OR</span>
                    <hr className="flex-1 border-border" />
               </div>
               <p className="text-center text-sm pt-4 text-gray-600 mb-5"> {type === 'login' ? "Don't have an account ? " : 'Already have an account?' }
                    <span className="text-black  font-bold" >
                         <Link to={type === 'login' ? '/signup' : '/'}>  {type === 'login' ? "Register" : 'Sign in' } </Link>
                    </span>
               </p>

          </>
     )

}
