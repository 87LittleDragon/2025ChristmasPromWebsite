import { title } from "process";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christmas Prom 2025",
  description: "Join us for a magical night under the stars",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover"
};

export default function Page({ children }: { children: React.ReactNode}){
    
    return(
        <div className="bg-[url('../../public/ChristmasProm2025/background.png')] h-[300vh] bg-[#9e9787] text-white bg-top md:bg-position-[center_top_10%] bg-cover bg-fixed overflow-x-hidden">
            {children}
        </div>
    )
}