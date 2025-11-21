'use server'

import { getViewCount } from "@/app/action/view";
import { getIntrestedCount } from "@/app/action/view";

export default async function Page(){
    const viewCount = await getViewCount()

    return(<>
    <h1>view:</h1>
    <p>{viewCount}</p>
    <h1>intrested:</h1>
    <p>{await getIntrestedCount()}</p>
    </>)
}