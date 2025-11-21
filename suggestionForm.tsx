'use client'

import { recordSuggestion } from "@/app/action/dataBase"
import { cinzel } from "@/app/ui/fonts"

export default function SuggestionForm(){
    return(
        <form className={`${cinzel.className} text-center m-auto text-white text-3xl mb-[50dvh]`} action={recordSuggestion}>
            <label> Is there anything you would like to do or have in the prom?</label>
            <br/>
            <input type="text" name="suggestion" className="bg-white text-black text-2xl rounded-sm w-[90dvw] border-black border-2 text-center" placeholder="Suggest anything! it's anonymous" />
            <br/>
            <input type="submit" value="Tell us!" className="bg-rose-950 rounded-2xl p-2 mt-5"/>
        </form>

    )
}