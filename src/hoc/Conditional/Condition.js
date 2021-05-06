import React, {useCallback} from 'react';

import If from "./If";
import ElseIf from "./ElseIf";
import Else from "./Else";

const Condition = ({children, condition}) => {
    const findChild = useCallback(MatchComponent => (
        React
            .Children
            .toArray(children)
            .find(child => child.type === MatchComponent && (MatchComponent !== ElseIf || child.props.condition))
    ), [children]);

    return condition ? findChild(If) : (findChild(ElseIf) || findChild(Else) || null);
};

export {If, ElseIf, Else}

export default Condition;
