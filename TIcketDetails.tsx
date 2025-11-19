import { cinzel } from '@/app/ui/fonts';

interface DetailV {
    id: number;
    title: string;
    value: string;
}

const detailsV:DetailV[] =  [
    {id:1, title:'Early bird ($80):', value: "13/11 - 14/11"},
    {id:2, title:'Regular Ticket:', value: "24/11 - 28/11"},
    {id:3, title:"Time:", value: "Lunch recess 13:20 - 13:50"},
    {id:4, title:"Venue:", value: "Cover Playground @TKHC"},
]

export default function TicketDetails(){
    const listDetails = detailsV.map(detailsV =>
    <div className="flex justify-between" key={detailsV.id}>
        <p key={detailsV.title} className='pr-5  text-[16px] lg:text-5xl'>{detailsV.title}</p>
        <p key={detailsV.value} className='text-right  text-[14px] lg:text-4xl'>{detailsV.value}</p>
    </div>)

    return (
        <div className={`${cinzel.className} text-center m-auto text-white scale-80 md:scale-90 lg:scale-100`}>
                    <h3 className="text-1xl lg:text-6xl text-center pb-0.5 lg:pb-10">Grab a ticket at:</h3>
                    {listDetails}
                    <p className='text-[7px] lg:text-3xl'>There are also some walk-in tickets</p>
        </div>

    )


}