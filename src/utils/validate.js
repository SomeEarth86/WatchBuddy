
export const validate = (email, password) => {

    const emailTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordTest = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!emailTest) return "Email not Valid"
    if (!passwordTest) return "Password not Valid"

    return null
}

