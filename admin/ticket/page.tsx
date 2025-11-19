'use client'

import { recordSell } from "@/app/action/tickets"
import { useState, useRef} from "react"

const pricePerTicket = 80

export default function page(){
    function calculatePrice(quantity:number){
        setTicketQuantity(quantity);
        setPrice(quantity * pricePerTicket)
    }

    function calculateChanges(moneyRecieved:number){
        setMoneyRecieved(moneyRecieved.toString());
        setChanges(Math.round((moneyRecieved - price) * 100)/100)
    }


    const [price, setPrice] = useState(80)
    const [ticketQuantity, setTicketQuantity] = useState(1)
    const [moneyRecieved, setMoneyRecieved] = useState('')
    const [changes, setChanges] = useState(0)

    const formRef = useRef<HTMLFormElement>(null)

    const handelSubmit = async (formData:FormData) => {
        setMoneyRecieved('')
        setTicketQuantity(1)
        formRef.current?.reset()
        await recordSell(formData)
    }



    return(
        <form action={handelSubmit} ref={formRef} className="flex flex-col gap-2 p-4 text-white">
            <label>Full Name</label>
            <input type="text" name="fullName" required className="bg-white text-black rounded-xs"/>
            <br/>
            <label>Homeroom</label>
            <input type="text" name="homeroom" required className="bg-white text-black rounded-xs"/>
            <br/>
            <label>StudentID / teacher email user "xxxx"@tkhc.edu.hk</label>
            <input type="text" name="studentID" required className="bg-white text-black rounded-xs"/>
            <br/>
            <label>number of ticket</label>
            <input type="number" name="ticketQuantity" min="1" required className="bg-white text-black rounded-xs" value={ticketQuantity} onChange={e => calculatePrice(e.target.valueAsNumber)}/>
            <br/>
            <label> money recieved</label>
            <input type="number" name="moneyRecieved" min={pricePerTicket} className="bg-white text-black rounded-xs" value={moneyRecieved}  onChange={e => calculateChanges(e.target.valueAsNumber)}/>

            <input type="hidden" name="price" value={price}/>
            <label>Total Price: ${price}</label>
            <label> Changes: ${changes}</label>

            <br/>
            <button type="submit" className="bg-white rounded-xl text-black">save</button>
        </form>

    )
}