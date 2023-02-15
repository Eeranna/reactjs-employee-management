import React, { useState } from 'react';

const Handler = (props) => {
    const [text, setText] = useState();

    const changeHandler = () => {
        setText("My Faverate Hero is Chiru;")
    }

    return (
        <div>
            <button onClick={changeHandler}>Change Text</button>
            {text}
        </div>
    );
}

export default Handler;