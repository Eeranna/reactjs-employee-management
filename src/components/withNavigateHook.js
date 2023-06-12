import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

//HOC(Higher Order Component)
const withNavigateHook = (Component) => {
    return (props) => {
        const navigation = useNavigate();

        return <Component navigation={navigation} {...props} />
    }
}

export default withNavigateHook;