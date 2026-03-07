import mainImg from "../../assets/images/Rectangle 1.png";

export default function Layout() {
  return (
    <div className='flex h-screen overflow-hidden'>
        <div className="w-1/2 h-full ">
            <img src={mainImg} className='w-full h-full object-fit'/>
        </div>
        <div></div>
    </div>
  )
}
