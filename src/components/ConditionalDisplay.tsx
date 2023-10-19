import {ReactNode, useState} from "react";

interface ConditionalDisplayProps {
    children : ReactNode;
}

function ConditionalDisplay({children}: ConditionalDisplayProps ) {
    const [display, setDisplay] = useState(true);
    return (
    <>
    <button type= "button" onClick={()=> setDisplay(!display)}>
        {display ? "Hide children": "Show children"}
    </button>
    {display && children}
    </>
    );
}

export default ConditionalDisplay;