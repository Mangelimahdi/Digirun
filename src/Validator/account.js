import { z } from "zod";

export const accountSchema = z.object({
    image: z
        .file()
        .mime(["image/png", "image/jpeg"], { message: "فرمت فایل باید (.png یا .jpeg)باشد" })
        .max(2 * 1024 * 1024, { message: "حجم تصویر نباید بیشتر از 2 مگابایت باشد" })
        .optional(),
    name: z
        .string()
        .trim()
        .min(3, { message: "نام باید حداقل 3 کاراکتر باشد" })
        .max(50, { message: "نام باید حداکثر 50 کاراکتر باشد" })
    ,
    phone: z
        .string()
        .trim()
        .regex(/^09(1[0-9]|2[012]|3[0-9])[0-9]{3}[0-9]{4}$/, { message: "شماره موبایل صحیح نمی باشد" })
    ,
    email: z
        .string()
        .trim()
        .regex(/^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w+)+$/, { message: "ایمیل وارد شده صحیح نیست" })
        .optional(),

    birthDate: z
        .string()
        .trim()
        .regex(/^\d{4}\/(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|[3][01])$/, { message: "تاریخ را به صورت درست وارد نمایید" })
        .optional()
    ,
})