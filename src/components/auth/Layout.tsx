import mainImg from "../../assets/images/Rectangle 1.png";
import logoType from "../../assets/images/logotype.png";
import Login from "./ui/login";

export default function Layout() {
  return (
    <div className='min-h-screen grid grid-cols-2'>
        <div className="h-screen">
            <img src={mainImg} className='w-full h-full object-center'/>
        </div>
        <div className="flex items-center flex-col justify-center bg-gray-50">
          <img src={logoType} className="absolute top-20"/>
          <Login/>
        </div>
    </div>
  )
}
