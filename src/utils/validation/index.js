import {emailValidation} from "./emailValidation";
import {numAndLetterValidation} from "./numAndLetterValidation"

export const validationList = {
    email : {
        validationText : "Невірний імейл",
        validationFunc : (data) => emailValidation(data)
    },
    nonSymbol : {
        validationText : "Повинен мати цифри чи букви",
        validationFunc : (data) => numAndLetterValidation(data)
    }
};