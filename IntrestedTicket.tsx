'use client';
import { PeelWrapper, PeelBack, PeelBottom, PeelTop } from "react-peel";
import Image from "next/image";
import ticketFront from "@/public/ChristmasProm2025/Ticket2.png"
import ticketBack from "@/public/ChristmasProm2025/TicketBack.png"
import { cinzel } from "@/app/ui/fonts";

let toggleInterest = false;

function interested() {
  if(toggleInterest){
    return
  }
  console.log("Ticket grabbed! We will reach out to you with more details soon.");
  toggleInterest = true;
  //alert("Ticket grabbed! We will reach out to you with more details soon.");

};

export default function IntrestedTicket(){
    return(
      <>
      <h1 className={`${cinzel.className} text-4xl md:text-5xl mt-[40vh] text-center overflow-clip`}>Grab the ticket if you want to join us!</h1>
      {/* pc view */}
    <div className="relative w-screen h-[80vh] ml-[10%] mt-[10vh] overflow-clip hidden md:flex">
      <Image src="/ChristmasProm2025/Ticket1.png" alt="ticket image" width={446} height={647} className="absolute z-10"/>
      <div>
    <PeelWrapper className="absolute inset-x-[440px] z-20" width={1558} height={647} drag corner={"TOP_RIGHT"} peelPosition={{x:1300, y:100}} options={{
      backShadow: true,
      topShadow: false,
      backShadowSize: 0.12,
    }} handleDrag={interested}>
      <PeelTop><Image src={ticketFront} alt="ticket front" width={1558} height={647} /></PeelTop>
      <PeelBack><Image src={ticketBack} alt="ticket back" width={1558} height={647}/></PeelBack>
      <PeelBottom><div className="flex h-full"><h1 className={`${cinzel.className} text-9xl text-center m-auto`}>Thank you for joining us!</h1></div></PeelBottom>
    </PeelWrapper>
    </div>
</div>
{/* Mobile View */}
<div className="relative flex w-screen ml-[5%] h-lvh mt-[5vh] overflow-clip md:hidden">
      <Image src="/ChristmasProm2025/Ticket1.png" alt="ticket image" width={84} height={122} className="absolute"/>

    <div>
    <PeelWrapper className="inset-x-[82px] z-20 touch-none" width={293} height={122} drag corner={"TOP_RIGHT"} options={{
      backReflection: false,
      backShadow: false,
      topShadow: true
    }} handleDrag={interested}>
      <PeelTop><Image src={ticketFront} alt="ticket front" width={293} height={122} /></PeelTop>
      <PeelBack><Image src={ticketBack} alt="ticket back" width={293} height={122} /></PeelBack>
      <PeelBottom><div className="flex h-full"><h1 className={`${cinzel.className} text-4xl text-center m-auto`}>Thank you for joining us!</h1></div></PeelBottom>
    </PeelWrapper>
    </div>
</div>
</>)
}