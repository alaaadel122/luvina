import mainImg from "../../assets/images/Rectangle 1.png";
import Login from "./ui/login";

export default function Layout() {
  return (
    <div className='flex h-screen overflow-hidden'>
        <div className="w-175 h-full">
            <img src={mainImg} className='w-full h-full object-fit'/>
        </div>
        <div className="w-[50%]  flex justify-center items-center">
          <Login/>
        </div>
    </div>
  )
}
