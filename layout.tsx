export default function Page({ children }: { children: React.ReactNode}){
    return(
        <body className="bg-[url('../../public/ChristmasProm2025/background.png')] h-screen text-white bg-top md:bg-position-[center_top_10%] bg-cover min-h-full max-w-full p-0 m-0">
            {children}
        </body>
    )
}