import { title } from "process";
import { Metadata } from "next";
import Background from "./background";

export const metadata: Metadata = {
  title: "Christmas Prom 2025",
  description: "Join us for a magical night under the stars",
};

export default function Page({ children }: { children: React.ReactNode}){
    
    return(
        <>
        <Background />
        <div className=" text-white overflow-hidden">
            {children}
        </div>
        </>
    )
}