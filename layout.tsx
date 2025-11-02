import Background from "./background";



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