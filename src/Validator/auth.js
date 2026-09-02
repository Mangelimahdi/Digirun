import { z } from 'zod';

const sendOtpSchema = z.object({
    phone: z
        .string()
        .trim()
        .regex(/^09[0-9]{9}$/, { message: "شماره موبایل وارد شده معتبر نیست." })
});

const verifyOtpSchema = z.object({
    phone: z
        .string()
        .trim()
        .regex(/^09[0-9]{9}$/, { message: "شماره موبایل وارد شده معتبر نیست." }),
    otp: z
        .string()
        .trim()
        .length(5, { message: "کد تایید باید 5 رقم باشد." })
})

export {
    sendOtpSchema,
    verifyOtpSchema
}