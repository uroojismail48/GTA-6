import Image from "next/image"
import BG from "../assets/hero-bg-clean-v2.png"
import Navbar from "../(components)/Navbar"
import Side from "../(components)/Side"
function Main() {
  return (
    <div className="h-screen w-full relative">
      <Image
      src={BG}
      alt="BG IMagE"
      fill style={{objectFit: "cover"}}
      priority
/>
<div className="relative z-1">
<Navbar/>
<Side/>
</div>
    </div>
  )
}

export default Main