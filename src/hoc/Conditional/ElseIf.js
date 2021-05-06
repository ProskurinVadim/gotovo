import React from 'react';

const ElseIf = ({children, render}) => render ? render() : children;

ElseIf.defaultProps = {
    condition: false
};

export default ElseIf;
