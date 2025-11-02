'use client'
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from 'motion/react'

import { title1 } from '@/app/ui/fonts'
import { title2 } from '@/app/ui/fonts'
import { useRef } from 'react'

export default function Title(){
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const moveLX = useTransform(scrollYProgress, [0.6, 1], ['0', '-100%'])
    const moveRX = useTransform(scrollYProgress, [0.6, 1], ['0', '100%'])

    return(
        <div>
            <motion.h1 ref={targetRef} style={{ x: moveLX }} className={title1.className.toString() +" text-6xl font-semibold md:text-[248px] pt-[30dvh] md:pt-[40dvh] ml-3 text-center"}>Noël l’ancien</motion.h1>
            <motion.h2 ref={targetRef} style={{ x: moveRX }} className={title2.className.toString() +" text-4xl  md:text-7xl mt-0 mr-[5%] md:mr-[20%]  text-right"}>PROM NIGHT</motion.h2>
        </div>

    )
}