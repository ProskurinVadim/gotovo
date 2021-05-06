import React from 'react';

const If = ({children, render}) => render ? render() : children;

export default If;
