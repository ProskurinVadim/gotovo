import React from 'react';

const Else = ({children, render}) => render ? render() : children;

export default Else;
