import Link from "next/link";


export default function Page(){
    return(<>
    <Link href="/prom/christmas/2025/admin/ticket" className="bg-white rounded-xl text-black p-4 m-4 inline-block">Ticket Sales</Link>
    <Link href="/prom/christmas/2025/admin/data" className="bg-white rounded-xl text-black p-4 m-4 inline-block">Data</Link>
    </>)
}