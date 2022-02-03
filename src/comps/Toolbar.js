import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const Toolbar = () => {

    const input = useRef()

    const nav = useNavigate()
    function goTo() {
        nav("/"+ input.current.value)
    }

    return (
        <div>
            <input type="text" ref={input}/>
            <button onClick={goTo}>Show</button>
        </div>
    );
};

export default Toolbar;