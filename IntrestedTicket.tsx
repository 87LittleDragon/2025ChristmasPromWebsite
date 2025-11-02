'use client';
import { PeelWrapper, PeelBack, PeelBottom, PeelTop } from "react-peel";
import Image from "next/image";
import ticketFront from "@/public/ChristmasProm2025/Ticket2.png"
import ticketBack from "@/public/ChristmasProm2025/TicketBack.png"
import { cinzel } from "@/app/ui/fonts";

import { intrestedIncrement } from "@/app/lib/action";

let toggleInterest = false;

function interested() {
  if(toggleInterest){
    return
  }
  intrestedIncrement();
  toggleInterest = true;
};

export default function IntrestedTicket(){
    return(
      <>
      <h1 className={`${cinzel.className} text-4xl lg:text-6xl mt-[40vh] text-center`}>Grab the ticket below to join us!</h1>
      {/* pc view */}
    <div className="relative h-[80vh] mt-[10vh] overflow-clip hidden lg:flex">
      <div className="mx-auto w-[1045px] h-[365px] bg-[#331612] bg-[url(@/public/ChristmasProm2025/ticketBackground2.jpg)] bg-blend-color-burn border-[#401c17] bg-no-repeat border-22 flex items-center">
        <div className="mx-auto w-[1001px] h-[324px]">
        <Image src="/ChristmasProm2025/Ticket1.png" alt="ticket image" width={223} height={324} className="absolute z-10 "/>
        <div className="touch-none" onClick={e => e.preventDefault()}>
      <PeelWrapper className="absolute inset-x-[220px] z-20 " width={781} height={324} drag corner={"TOP_RIGHT"} peelPosition={{x: 700, y:200}} options={{
        backShadow: true,
        topShadow: false,
        backShadowSize: 0.12,
        bottomShadowSize: 1.3,
        bottomShadowLightAlpha: 0.2,
        bottomShadowDarkAlpha: 0.5,
        
      }} handleDrag={interested}>
        <PeelTop><Image src={ticketFront} alt="ticket front" width={781} height={324} /></PeelTop>
        <PeelBack><Image src={ticketBack} alt="ticket back" width={781} height={324}/></PeelBack>
        <PeelBottom><div className="h-full flex flex-col"><h1 className={`${cinzel.className} text-9xl text-center m-auto text-white`}>à bientôt</h1><h1 className={`${cinzel.className} text-6xl text-right  text-white`}>See you there!</h1></div></PeelBottom>
      </PeelWrapper>
      </div>
      </div>
    </div>
</div>
{/* Mobile View */}
<div className="relative flex h-lvh mt-[5vh] overflow-clip lg:hidden">
  <div className="mx-auto w-[400px] h-[145px] bg-[#331612] bg-[url(@/public/ChristmasProm2025/ticketBackground2.jpg)] bg-blend-color-burn border-[#401c17] border-12 bg-no-repeat flex items-center ">
  <div className="mx-auto w-[377px] h-[122px]">
      <Image src="/ChristmasProm2025/Ticket1.png" alt="ticket image" width={84} height={122} className="absolute"/>

    <div className="touch-none" onClick={e => e.preventDefault()}>
    <PeelWrapper className="inset-x-[82px] z-20 touch-none" width={293} height={122} drag corner={"TOP_RIGHT"} peelPosition={{x: 260, y:50}} options={{
        backShadow: true,
        topShadow: false,
        backShadowSize: 0.12,
        bottomShadowSize: 1.3,
        bottomShadowLightAlpha: 0.2,
        bottomShadowDarkAlpha: 0.5,
    }} handleDrag={interested}>
      <PeelTop><Image src={ticketFront} alt="ticket front" width={293} height={122} className="touch-none" /></PeelTop>
      <PeelBack><Image src={ticketBack} alt="ticket back" width={293} height={122} className="touch-none" /></PeelBack>
      <PeelBottom><div className="h-full flex flex-col"><h1 className={`${cinzel.className} text-5xl text-center m-auto text-white`}>à bientôt</h1><h1 className={`${cinzel.className} text-2xl text-right  text-white`}>See you there!</h1></div></PeelBottom>
    </PeelWrapper>
    </div>
</div>
</div>
</div>
</>)
}