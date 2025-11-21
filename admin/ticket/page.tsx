'use client'

import { getDBTicketNumber, setDBTicketNumber, recordSell } from "@/app/action/tickets"
import { useState, useRef} from "react"
const pricePerTicket = 80

export default function page(){
    function calculatePrice(quantity:number){
        setTicketQuantity(quantity);
        setPrice(quantity * pricePerTicket);
        calculateChanges(moneyRecieved as unknown as number)
    }

    function calculateChanges(moneyRecieved:number){
        setMoneyRecieved(moneyRecieved.toString());
        setChanges(Math.round((moneyRecieved - price) * 100)/100)
    }

    const [ticketNumber, setTicketNumber] = useState(1)
    const [price, setPrice] = useState(80)
    const [ticketQuantity, setTicketQuantity] = useState(1)
    const [moneyRecieved, setMoneyRecieved] = useState('')
    const [changes, setChanges] = useState(0)

    const formRef = useRef<HTMLFormElement>(null)

    const handelSubmit = async (formData:FormData) => {
        setTicketNumber(ticketNumber + ticketQuantity)
        setDBTicketNumber(ticketNumber);
        setMoneyRecieved('')
        setTicketQuantity(1)
        formRef.current?.reset()
        await recordSell(formData)
    }
    
    const handelTicketNumber = async () =>{
        setTicketNumber(await getDBTicketNumber() as unknown as number)
    }



    return(
        <form action={handelSubmit} ref={formRef} className="flex flex-col gap-2 p-4 text-white bg-[#331612]/80 bg-blend-color-burn rounded-xl m-4">
            <label>Full Name</label>
            <input type="text" name="fullName" required className="bg-white text-black rounded-xs" onClick={handelTicketNumber}/>
            <br/>
            <label>Homeroom</label>
            <input type="text" name="homeroom" required className="bg-white text-black rounded-xs"/>
            <br/>
            <label>StudentID / teacher email user "xxxx"@tkhc.edu.hk</label>
            <div className="flex">
            <br/>
            <input type="text" name="studentID" required className="bg-white text-black rounded-xs"/>
            <p>@tkhc.edu.hk</p>
            </div>
            <br/>
            <label>number of ticket</label>
            <input type="number" name="ticketQuantity" min="1" required className="bg-white text-black rounded-xs" value={ticketQuantity} onChange={e => calculatePrice(e.target.valueAsNumber)}/>
            <br/>
            <label>Ticket Number</label>
            <input type="number" name="ticketNumber" required className="bg-white text-black rounded-xs" value={ticketNumber} onChange={e => setTicketNumber(e.target.valueAsNumber)}/>
            <br/>
            <label> money recieved</label>
            <input type="number" name="moneyRecieved" min={price} className="bg-white text-black rounded-xs" value={moneyRecieved}  onChange={e => calculateChanges(e.target.valueAsNumber)}/>

            <input type="hidden" name="price" value={price}/>
            <label>Total Price: ${price}</label>
            <label> Changes: ${changes}</label>

            <br/>
            <button type="submit" className="bg-white rounded-xl text-black">save</button>
        </form>

    )
}