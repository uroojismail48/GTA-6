import Image from "next/image"
import Logo from "../assets/logo.webp"
import Link from "next/link"
function Navbar() {
  return (
<div className="w-full h-[50%] text-black flex justify-between lg:justify-around items-center px-4 ">
  <div className="h-full w-20 flex items-center ">
    <Image src={Logo} alt="logo" className="object-cover" />
  </div>

 
  <div className=" hidden lg:flex lg:w-120 xl:w-210 h-full  justify-between font-bold text-md items-center font-sans">
    <Link href="#">ABOUT</Link>
    <Link href="#">GAMEPLAY</Link>
    <Link href="#">MEDIA</Link>
    <Link href="#">NEWS</Link>
    <Link href="#">PRE-ORDER</Link>
  </div>

  <div className="h-full flex items-center ">
    <button className="h-10 px-4 md:w-40 font-bold bg-purple-500 rounded-3xl">
      PRE-ORDER
    </button>
  </div>
</div>
  )
}

export default Navbar