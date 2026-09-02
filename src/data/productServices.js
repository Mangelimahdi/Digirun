
import { IoReturnDownBackOutline } from "react-icons/io5";
import { HiOutlineTruck } from "react-icons/hi2";
import { LuCalendar } from "react-icons/lu";
import { RiVerifiedBadgeFill } from "react-icons/ri";
const generateServices = () => {
    return [
        {
            id: 1,
            title: "ضمانت بازگشت کالا",
            Icon: IoReturnDownBackOutline
        },
        {
            id: 2,
            title: "تضمین اصالت کالا",
            Icon: RiVerifiedBadgeFill
        },
        {
            id: 3,
            title: "پشتیبانی همه روزه",
            Icon: LuCalendar
        },
        {
            id: 4,
            title: "ارسال به سراسر کشور",
            Icon: HiOutlineTruck
        },
    ];
}
export default generateServices;