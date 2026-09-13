import { useState } from 'react'
import useCountDown from './useCountDown';
import { useNavigate } from 'react-router';
import { validate } from '../Validator';
import { sendOtpSchema, verifyOtpSchema } from '../Validator/auth';
import { toast } from 'sonner';
import useOtp from './useOtp.jsx';
import useLocalStorage from './useLocalStorage.jsx';
import { matchesIdentifier } from '../services/auth.service.js';

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

    const { state: users, setValue: setUsers } = useLocalStorage("users", []);
    const { state: user, setValue: setUser } = useLocalStorage('user', {});

    useEffect(() => {
        if (isOtpSent) {
            otpRefs.current[0]?.focus()
        }
    }, [isOtpSent]);

    const handlePhoneChange = (event) => {
        const value = event.target.value;
        const phoneRegex = /^\d{0,11}$/;

        if (!phoneRegex.test(value)) return;

        setPhone(value);
    }

    const handleBack = () => {
        if (isOtpSent) {
            setIsOtpSent(false);
            return;
        }

        navigate('/');
    }

    const generateOtp = () => {
        setTimeout(() => {
            alert("12345");
        }, 500);
    }

    const addUser = () => {
        const userId = crypto.randomUUID();

        const newUser = {
            id: userId,
            phone: phone,
        };

        setUsers([...users, newUser]);
        setUser({ ...newUser, isLogin: true })
    }

    const sendOtp = async () => {
        if (!validate(sendOtpSchema, { phone })) return;

        toast.success("کد با موفقیت ارسال شد");

        setIsOtpSent(true);

        generateOtp();
        restart();
    }


    const handleResendOtp = async () => {
        restart();
    }

    const verifyOtp = () => {
        const otpCode = otp.join('');

        if (!validate(verifyOtpSchema, { phone, otp: otpCode })) {
            return false
        }

        if (otpCode !== "12345") {
            toast.error("کد وارد شده صحیح نیست")
            return false;
        }
        return true;
    }

    const login = () => {
        if (!verifyOtp()) return;

        const currentUser = users.find(user => matchesIdentifier(user, phone));
        if (currentUser) {
            toast.success("با موفقیت وارد شدید");
            setUser({ ...currentUser, isLogin: true });
        } else {
            toast.success("ثبت نام با موفقیت انجام شد");
            addUser();
        }
        navigate('/')
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (isOtpSent) {
                login();
            } else {
                sendOtp();
            }
        } catch (err) {
            console.log(err)
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
        handleBack,
        isLogin: user.isLogin
    }
}

export default useAuth