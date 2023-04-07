import { type } from "os";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<t> = [
    t,
    Dispatch<SetStateAction<t>>,
];


function usePersistedState<t>(key:string, initialState: t): Response<t> {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key)

        if (storageValue) {
            return JSON.parse(storageValue);
        }else{
            return initialState
        }
    });

    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];

}

export default usePersistedState;