import { useState } from 'react'
import useCountDown from './useCountDown';
import { useNavigate } from 'react-router';
import { validate } from '../Validator';
import { sendOtpSchema, verifyOtpSchema } from '../Validator/auth';
import { toast } from 'sonner';
import * as authService from "../services/auth.service.js";
import useOtp from './useOtp.jsx';

const useAuth = () => {
    const [phone, setPhone] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const navigate = useNavigate();

    const {
        otp,
        otpRefs,
        handleOtpChange,
        handleKeyDown,
        handlePaste
    } = useOtp();
    
    const {
        restart,
        isExpired,
        getFormattedTime
    } = useCountDown(120);

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        if (!/^\d*$/.test(value)) return

        setPhone(value);
    }

    const handleBack = () => {
        if (isOtpSent) {
            setIsOtpSent(false);
            return
        }
        navigate('/')
    }

    const sendOtp = async () => {
        if (!validate(sendOtpSchema, { phone })) return;

        // await authService.sendOtp(phone);

        setIsOtpSent(true);
        restart();
    }

    const handleResendOtp = async () => {
        // await authService.sendOtp(phone);

        restart();
    }

    const verifyOtp = async () => {
        const otpCode = otp.join('')
        
        if (!validate(verifyOtpSchema, {
            phone,
            otp: otpCode
        })) return;

        const data = await authService.verifyOtp(phone, otp)
        return data
    }

    const login = async () => {
        const data = await verifyOtp();
        if (!data) return;

        toast.success("با موفقیت وارد شدید");
        navigate('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (isOtpSent) {
                await login();
            } else {
                await sendOtp();
            }

        } catch (err) {
            return err
        }
    }


    return {
        isOtpSent,
        phone,
        otp,
        isExpired,
        otpRefs,
        getFormattedTime,
        handleKeyDown,
        handlePaste,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit,
        handleResendOtp,
        handleBack
    }
}

export default useAuth