import { logout } from "@/app/action/auth";


export default function Page({ children }: { children: React.ReactNode}){
    return(
    <>
        <button onClick={logout}>logout</button>
    
        {children}
    </>
    )}