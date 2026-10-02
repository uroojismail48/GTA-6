import Image from "next/image"
import Logo from "../assets/logo.webp"
function Side() {
  return (
    <div
    className="  gap-5 
    h-170 w-160 pl-20 flex justify-center  flex-col " 
    >
        <div className="flex  relative">

<span className="gta-title text-9xl font-bold ">GRAND
    <br/>
     
    <span className="pl-15"> THEFT</span>
   <br/>
    
      <span  className="pl-12">AUTO</span></span>
 <div className=" w-36 flex items-center absolute right-30 bottom-0">
       <Image src={Logo} alt="LOGO image" className="object-cover" />
 
 </div>
        </div>
<div className=" flex flex-col justify-center w-full  pt-5 text-white">
<p className="text-2xl text-yellow-300 font-sans">WELCOME TO LEONIDA</p>
<p className=" text-md ">A sprawling state , inspired by Florida,
    <br/>
    where Suns-soaked streets , wild nights,<br />
    and  endless opportunities ahead
</p>
  
</div>
<div className="">
    <button className="w-50 font-bold text-lg rounded-4xl h-15 bg-purple-400">
        PRE-ORDER NOW
    </button>
</div>
  </div>
  )
}

export default Side