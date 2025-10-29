'use client'
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from 'motion/react'

import { ballet } from '@/app/ui/fonts'
import { cinzelDecorative } from '@/app/ui/fonts'

export default function Title(){
    const {scrollY} = useScroll();
    const smoothedScrollY = useSpring(scrollY, { stiffness: 70});
    useMotionValueEvent(scrollY, "change", (val) => {
        console.log("Scroll Y:", val)
    })
    

    const moveLX = useTransform(smoothedScrollY, [50, 400], ['0', '-100%'])
    const moveRX = useTransform(smoothedScrollY, [50, 400], ['0', '100%'])

    return(
        <div>
            <motion.h1 style={{ x: moveLX }} className={ballet.className.toString() +" text-6xl md:text-9xl pt-[30dvh] md:pt-[40dvh] ml-3 text-center"}>Vieux Noel</motion.h1>
            <motion.h2 style={{ x: moveRX }} className={cinzelDecorative.className.toString() +" text-4xl md:text-7xl mt-0 mr-[5%] md:mr-[20%]  text-right"}>PROM NIGHT</motion.h2>
        </div>

    )
}