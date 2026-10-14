import { useReducer } from 'react'
import useLocalStorage from './useLocalStorage';
import profileReducer from '../reducers/profileReducer';
import { validate } from '../Validator';
import { accountSchema } from '../Validator/account';
import { toast } from 'sonner';

const useProfileForm = () => {
    const { state: currentUser, setValue: setCurrentUser } = useLocalStorage('user', {});
    const { setValue: SetUsers } = useLocalStorage('users', []);

    const [state, dispatch] = useReducer(profileReducer, currentUser, (currentUser) => ({
        name: currentUser.name ?? "",
        phone: currentUser.phone ?? "",
        email: currentUser.email ?? "",
        image: currentUser.image ?? undefined,
        birthDate: currentUser.birthDate ?? "",
    }));

    const convertFileToDataUrl = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);

            reader.readAsDataURL(file)
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!validate(accountSchema, state)) return;

        try {
            const image = state.image instanceof File
                ? await convertFileToDataUrl(state.image)
                : state.image

            const updatedData = { ...state, image }

            SetUsers(prevUsers => {
                return prevUsers.map((user) => user.id === currentUser.id ?
                    { ...user, ...updatedData }
                    : user
                )
            });

            setCurrentUser((prevUser) => ({
                ...prevUser,
                ...updatedData
            }))
            toast.success("اطلاعات حساب کاربری با موفقیت به‌روزرسانی شد");
        } catch (err) {
            toast.error("ویرایش اطلاعات با خطا مواجه شد")
        }
    }

    return { state, dispatch, submitHandler }
}

export default useProfileForm