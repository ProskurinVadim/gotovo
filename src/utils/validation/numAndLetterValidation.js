export const numAndLetterValidation = (data) => {
    const numAndLetterRegex = new RegExp("^[a-zA-Z0-9-]+$");
    return numAndLetterRegex.test(data)
};