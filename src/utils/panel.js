import { IoWalletOutline, IoBagOutline } from "react-icons/io5";
import { PiTicketLight } from "react-icons/pi";

const generateSummaries = ({
    wallet = 0,
    productsLength = 0,
    ticketsLength = 0,
}) => {
    return [
        {
            id: 1,
            title: 'کیف پول:',
            value: `${wallet} تومان`,
            Icon: IoWalletOutline
        },
        {
            id: 2,
            title: 'در صف خرید:',
            value: productsLength,
            Icon: IoBagOutline
        },
        {
            id: 3,
            title: 'تیکت ها:',
            value: ticketsLength,
            Icon: PiTicketLight
        },
    ]
}


export default generateSummaries