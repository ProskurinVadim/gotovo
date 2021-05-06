export const emailValidation = (data) => {
    const emailRegex = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
    return emailRegex.test(data)
};