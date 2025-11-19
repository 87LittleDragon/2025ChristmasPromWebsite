import { getViewCount } from "@/app/action/view";
import { getIntrestedCount } from "@/app/action/view";

export default async function Page(){
    return(<>
    <h1>view:</h1>
    <p>{await getViewCount()}</p>
    <h1>intrested:</h1>
    <p>{await getIntrestedCount()}</p>
    </>)
}