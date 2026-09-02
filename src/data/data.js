import { BiBasket, BiCategory, BiHeart, BiPhone, BiUser } from "react-icons/bi";
import { MdOutlineMenuBook, MdOutlineWarningAmber } from "react-icons/md";

const sidebarMenus = [
    {
        id: 1,
        title: "دسته بندی ها",
        href: "/categories",
        Icon: BiCategory
    },
    {
        id: 2,
        title: "حساب کاربری",
        href: "/account",
        Icon: BiUser
    },
    {
        id: 3,
        title: "علاقه مندی ها",
        href: "/account/favorites",
        Icon: BiHeart
    },
    {
        id: 4,
        title: "سبد خرید",
        href: "/cart",
        Icon: BiBasket
    },
    {
        id: 5,
        title: "درباره ما",
        href: "/aboutus",
        Icon: MdOutlineWarningAmber
    },
    {
        id: 6,
        title: "تماس با ما",
        href: "/contactus",
        Icon: BiPhone
    },
    {
        id: 7,
        title: "وبلاگ",
        href: "/blogs",
        Icon: MdOutlineMenuBook
    },
]

export { sidebarMenus }