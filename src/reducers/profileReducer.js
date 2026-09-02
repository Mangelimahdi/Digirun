

export const initialProfileState = {
    name: "",
    phone: "",
    email: "",
    password: "",
    birthDate: null
}

const profileReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_FIELD": {
            return {
                ...state,
                [action.field]: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default profileReducer;