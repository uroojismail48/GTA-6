"use client"

import Image from "next/image"
import BG from "../assets/hero-bg-clean-v2.png"
import Navbar from "../(components)/Navbar"
import Side from "../(components)/Side"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

function Main() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })


  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={ref} className="h-screen w-full relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image src={BG} alt="BG" fill style={{ objectFit: "cover" }} priority />
      </motion.div>
<div className="relative z-10">
<Navbar/>
<Side />
</div>
   </div>

  )
}

export default Main