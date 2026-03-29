import { Outlet } from "react-router";
import mainImg from "../../assets/images/Rectangle 1.png";
import logoType from "../../assets/images/logotype.png";

export default function AuthLayout() {
  return (
    <div className='min-h-screen grid grid-cols-2 '>
        <div className="h-screen">
            <img src={mainImg} className='w-full h-full object-center'/>
        </div>
        <div className="flex items-center flex-col bg-gray-50 relative">
          <img src={logoType} className="absolute top-30"/>
         <Outlet/> 
        </div>
    </div>
  )
}
