import Image from "next/image"
import pic1 from "../assets/p4.webp"
import pic2 from "../assets/p2.webp"
import pic3 from "../assets/p6.webp"
import pic4 from "../assets/p3.webp"
function Second() {
  return (
       <div className="h-screen w-full p-14 bg-black max-md:p-0  flex flex-col">
<div className="h-full w-full flex max-md:flex-col ">
  <div className="w-130  h-80 relative overflow-hidden rounded-4xl">
     <Image
      src={pic1}
      alt="BG IMagE"
      fill
     className="object-cover  "
      priority
/>
    </div>         
<div className="w-100 h-80 rounded-4xl">
     
  </div> 
<div className="w-130 h-80  rounded-4xl relative overflow-hidden">
     <Image
      src={pic2}
      alt="BG IMagE"
      fill
     className="object-cover  "
      priority
/>
  </div>  
  </div>  
  <div className="h-full w-full flex justify-center max-md:hidden  items-center md-max:gap-0 md-max:mt-0 gap-20 mt-20 ">
      <div className="w-100  h-80  rounded-4xl   relative overflow-hidden">
           <Image
      src={pic3}
      alt="BG IMagE"
      fill
     className="object-cover  "
      priority
/>
        </div>         
<div className="w-200 h-80 rounded-4xl  relative overflow-hidden">
     <Image
      src={pic4}
      alt="BG IMagE"
      fill
     className="object-cover  "
      priority
/>
  </div> 
  </div>
    </div>
    
  )
}

export default Second