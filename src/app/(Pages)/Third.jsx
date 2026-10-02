import Image from "next/image"
import pic6 from "../assets/p5.webp"
function Third() {
  return (
       <div className="h-screen w-full p-10">
   <div className="w-full h-100 pt-30  flex ">
 <div className="w-full h-full text-black text-4xl font-bold  justify-center flex gap-10 flex-col">
     <h1>WHY YOU'LL LOVE IT</h1>
<div className="flex  justify-around items-center">
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
       className="object-cover h-full w-full  "
      
  />

 </div>
 .
   </div>
    </div>
  )
}

export default Third