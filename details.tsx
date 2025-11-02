"use client"
import { cinzel } from '@/app/ui/fonts';
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from 'motion/react'
import { useRef } from 'react';

interface DetailV {
    id: number;
    title: string;
    value: string;
}

const detailsV:DetailV[] =  [
    {id:1, title:'Date:', value: "December 21th, 2025 (Sunday)"},
    {id:2, title:"Time:", value: "5:00 PM - 8:00 PM"},
    {id:3, title:"Venue:", value: "Hall@TKHC"},
    {id:4, title:"Theme:", value: "European vintage Christmas"},
    {id:5, title:"Audience:", value: "G.9-12 Students, Teachers and TKHC Alumni"}
]



export default function Details(){
    const targetRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    //const smoothedScrollY = useSpring(scrollY, { stiffness: 70});
    useMotionValueEvent(scrollYProgress, "change", (val) => {
        // console.log("Scroll Y:", val)
    });
    const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);


    const listDetails = detailsV.map(detailsV =>
    <div className="flex justify-between px-[7vw] py-[4vh]" key={detailsV.id}>
        <p key={detailsV.title} className='pr-5  text-3xl md:text-5xl'>{detailsV.title}</p>
        <p key={detailsV.value} className='text-right  text-1xl md:text-4xl'>{detailsV.value}</p>
    </div>
    )
    return(
        <motion.div ref={targetRef} style={{ scale }} className={`${cinzel.className} mt-[50dvh] bg-neutral-700/75 bg-opacity-0 mx-[5vw] rounded-4xl`}>
            <h3 className="text-4xl md:text-6xl text-center">Details</h3>
            {listDetails}
        </motion.div>
    )
}