import Details from './details'
import IntrestedTicket from './IntrestedTicket'
import Title from './title'
import ViewCounter from './viewCounter'
import SuggestionForm from './suggestionForm'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TKHC Christmas Prom 2025",
  description: "Join us for a wonderful prom night filled with joy and celebration!",
  metadataBase: new URL('https://tkhcslc.info/prom/christmas/2025'),
};

export default function Page(){

    return(
        <>
        <ViewCounter/>
        <Title/>
        <Details/>
        <IntrestedTicket/>
        <SuggestionForm/>
        </>
    )
}