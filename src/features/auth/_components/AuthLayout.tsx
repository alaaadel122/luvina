import { Outlet } from "react-router";
import mainImg from "../../../assets/images/Rectangle1.png";
import logoType from "../../../assets/images/logotype.png";
import { Suspense } from "react";
import Loading from "@/components/shared-component/Loading";

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block h-screen">
        <img src={mainImg} className='w-full h-full object-center' />
      </div>
      <div className="flex items-center justify-center flex-col bg-gray-50 relative">
        <img src={logoType} className="absolute top-30" />
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>

      </div>
    </div>
  )
}
