import React, { useReducer } from 'react';
import AccountSectionHeader from '../components/AccountSectionHeader';
import ProfileAvatar from './components/ProfileAvatar';
import EditableField from './components/EditableField';
import CustomDatePicker from '../../../components/common/DatePicker/DatePicker';
import profileReducer, { initialProfileState } from '../../../reducers/profileReducer';

const Profile = () => {
    const [state, dispatch] = useReducer(profileReducer, initialProfileState)

    return (
        <div className='bg-white shadow-100 dark:bg-dark-100 mb-8 rounded-lg p-4 md:p-8'>
            <AccountSectionHeader
                title='اطلاعات حساب کاربری'
            />
            <form action="#" className='w-full'>
                <ProfileAvatar />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <EditableField
                        label="نام و نام خانوادگی"
                        placeholder="نام و نام خانوادگی را وارد کنید"
                        value={state.name}
                        onChange={(event) => {
                            {
                                dispatch({
                                    type: "UPDATE_FIELD",
                                    field: "name",
                                    payload: event.target.value
                                })
                            }
                        }}
                    >
                        <input
                            type='text'
                            className='w-full outline-0 text-xs md:text-sm text-gray-400 dark:text-gray-400'
                        />
                    </EditableField>
                    <EditableField
                        label="شماره موبایل"
                        placeholder="شماره موبایل را وارد کنید"
                        value={state.phone}
                        onChange={(event) => {
                            dispatch({
                                type: "UPDATE_FIELD",
                                field: "phone",
                                payload: event.target.value
                            })
                        }}
                    >
                        <input
                            type='text'
                            className='w-full outline-0 text-xs md:text-sm text-gray-400 dark:text-gray-400'
                        />
                    </EditableField>
                    <EditableField
                        label="ایمیل"
                        placeholder="ایمیل را وارد کنید"
                        value={state.email}
                        onChange={(event) => {
                            dispatch({
                                type: "UPDATE_FIELD",
                                field: "email",
                                payload: event.target.value
                            })
                        }}
                    >
                        <input
                            type='text'
                            className='w-full  outline-0 text-xs md:text-sm text-gray-400 dark:text-gray-400'
                        />
                    </EditableField>
                    <EditableField
                        label="رمز عبور"
                        placeholder="رمز وارد کنید."
                        value={state.password}
                        onChange={(event) => {
                            dispatch({
                                type: "UPDATE_FIELD",
                                field: "password",
                                payload: event.target.value
                            })
                        }}
                    >
                        <input
                            type='text'
                            className='w-full outline-0 text-xs md:text-sm text-gray-400 dark:text-gray-400'
                        />
                    </EditableField>
                    <EditableField
                        label="تاریخ تولد"
                        placeholder="تاریخ انتخاب کنید"
                        value={state.birthDate}
                        onChange={(date) => {
                            dispatch({
                                type: "UPDATE_FIELD",
                                field: "birthDate",
                                payload: date.format("YYYY/MM/DD")
                            })
                        }}
                    >

                        <CustomDatePicker />
                    </EditableField>
                </div>
                <div className='mt-4 flex items-center justify-end'>
                    <button className="bg-primary-300 text-white py-1.5 px-3 rounded-lg cursor-pointer">ثبت</button>
                </div>
            </form >
        </div >
    )
}

export default Profile