import React, { useState } from 'react';

const Handler = (props) => {
    const [text, setText] = useState();

    const changeHandler = () => {
        setText("My Faverate Color is Green;")
    }

    return (
        <div>
            <button onClick={changeHandler}>Change Color</button>
            {text}
        </div>
    );
}

export default Handler;