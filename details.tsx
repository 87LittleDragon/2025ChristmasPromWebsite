"use client"
import { cinzel } from '@/app/ui/fonts';
import { motion, useScroll, useMotionValueEvent, useTransform, useSpring } from 'motion/react'

interface DetailV {
    id: number;
    title: string;
    value: string;
}

const detailsV:DetailV[] =  [
    {id:1, title:'Date:', value: "December 21th, 2025 (Saturday)"},
    {id:2, title:"Time:", value: "5:00 PM - 8:00 PM"},
    {id:3, title:"Venue:", value: "Hall@TKHC"},
    {id:4, title:"Theme:", value: "European vintage Christmas"},
    {id:5, title:"Audience:", value: "G.9-12 Students, Teachers and TKHC Alumni"}
]



export default function Details(){
    const {scrollY} = useScroll();
    //const smoothedScrollY = useSpring(scrollY, { stiffness: 70});
    const scale = useTransform(scrollY, [300, 800, 1300, 1700], [0,1, 1, 0]);


    const listDetails = detailsV.map(detailsV =>
    <div className="flex justify-between px-[7vw] py-[4vh] text-4xl" key={detailsV.id}>
        <p key={detailsV.title}>{detailsV.title}</p>
        <p key={detailsV.value}>{detailsV.value}</p>
    </div>
    )
    return(
        <motion.div style={{ scale }} className={`${cinzel.className} mt-[50dvh] bg-neutral-700/75 bg-opacity-0 mx-[5vw] rounded-4xl`}>
            <h3 className="text-2xl md:text-6xl text-center">Details</h3>
            {listDetails}
        </motion.div>
    )
}