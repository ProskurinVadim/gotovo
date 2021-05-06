import React from 'react';
import {connect} from "react-redux";

import Condition from "../Conditional/Condition";
import If from "../Conditional/If";
import Else from "../Conditional/Else";
import Spinner from "../../components/common/Spinner"

const Loadable = ({loading, children, spinnerClassName}) => (
    <Condition condition={loading}>
        <If>
            <Spinner className={spinnerClassName}/>
        </If>
        <Else>
            {children || null}
        </Else>
    </Condition>
);


export default Loadable;
