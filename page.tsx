import { ballet } from '@/app/ui/fonts'
import { cinzelDecorative } from '@/app/ui/fonts'
export default function page(){
    return(
        <div>
            <h1 className={ballet.className.toString() +" text-6xl md:text-9xl mt-10 ml-3 text-center"}>Vieux Noel</h1>
            <h2 className={cinzelDecorative.className.toString() +" text-4xl md:text-7xl mt-0 mr-[30%]  text-right pt-0"}>PROM NIGHT</h2>
        </div>

    )
}