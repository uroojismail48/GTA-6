import Image from "next/image"
import pic6 from "../assets/p5.webp"
import pic3 from "../assets/p9.jpg"
function Third() {
  return (
       <div className="h-screen bg-black max-md:p-0 w-full p-10 ">
   <div className="w-full h-100 pt-30  flex flex-col ">
<div className="flex  h-full w-full  ">
   <div className="w-full h-full text-white text-4xl font-bold max:max-items-center justify-center flex gap-10 flex-col">
     <h1>WHY YOU WILL LOVE IT</h1>
<div className="flex   justify-around items-center">
  <div className="w-50 h-50 bg-amber-100 rounded-3xl"></div>
<div className="w-50 h-50 bg-amber-100 rounded-3xl"></div>
<div className="w-50 h-50 bg-amber-100 rounded-3xl"></div>
</div>
 </div>
  <div className="w-200 relative overflow-hidden rounded-3xl h-full ">
   <Image
        src={pic6}
        alt="BG IMagE"
        fill
       className="object-cover   "
      
  />

 </div>

</div>

   </div>
  <div className="w-full h-70  flex justify-center items-center ">
     <div className="h-[70%] relative overflow-hidden rounded-4xl w-full ">
   <Image
        src={pic3}
        alt="BG IMagE"
        fill
       className="object-cover"
      
  />
     </div>
  </div>
    </div>
  )
}

export default Third