"use client"
import Main from "./(Pages)/Main";
import Second from "./(Pages)/Second";
import Third from "./(Pages)/Third";
import {motion , useScroll} from "motion/react"
function page() {
const {scrollYProgress} = useScroll()
return (
<>
<motion.div 
style={{
  scaleX : scrollYProgress,
  transformOrigin :"left",
  position:"fixed",
  top : 0,
  left: 0,
  right:0,
  height: 4,
  background : "#ff2388",
  zIndex: 50

}}
/>
      <Main/>
<Second/>
<Third/>
  
 </>
  )
}

export default page;