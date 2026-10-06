import { useRef, useState } from 'react'

const useOtp = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const otpRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (!/^\d{0,5}$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;

        setOtp(newOtp);
        if (value && index < otpRefs.current.length - 1) {
            focusNextInput(index);
        }
    }

    const handleKeyDown = (event, index) => {
        if (event.key !== "Backspace") return;

        const currentInput = otp[index];
        if (!currentInput && index > 0) {
            focusPrevInput(index);
        }
    }

    const handlePaste = (event) => {
        event.preventDefault();

        const pastedText = event.clipboardData.getData('text');
        const regPastedText = /^[0-9]{5}$/;
        const newOtp = pastedText.split("")

        if (!regPastedText.test(pastedText)) return;

        setOtp(newOtp)
        otpRefs.current[otpRefs.current.length - 1].focus();
    }

    const focusNextInput = (index) => {
        otpRefs.current[index + 1].focus();
    }

    const focusPrevInput = (index) => {
        otpRefs.current[index - 1].focus();
    }

    return {
        otp,
        otpRefs,
        handleOtpChange,
        handleKeyDown,
        handlePaste
    }
}

export default useOtp