import {useCallback} from "react";
import {useHistory} from "react-router-dom";

export const useRedirect = to => {
    const history = useHistory();

    return useCallback(e => {
        if (e) e.stopPropagation();
        history.push(to);
    }, [history, to])
};

