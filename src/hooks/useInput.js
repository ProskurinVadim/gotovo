import {useState} from 'react';


export const useInput = (initialValue="",validateFunc) => {
    const [value,setValue] = useState(initialValue);
    return {
        value,
        setValue,
        reset : ()=> setValue(""),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value)
            }
        }
    }
};