import {useState} from "react";
import '../index.css';


function ColorCounter() {
    const [redCount, setRedCount] = useState(0);
    const [blueCount, setBlueCount] = useState(0);


    const getBiggerColoerText = () => {

        if(redCount > blueCount) {
    return "Red bigger than blue";
        }

        else if(redCount < blueCount){
            return "Blue bigger than red";
        }

        else{
            return "Blue and red are equal";
        }
    }

    return(

       
        <>
        <div className = "flex-box">              
        <div className="red-box color-box">
        <p>red was pressed {redCount} times</p>
        <button onClick = {() => setRedCount(redCount + 1)} type ="button">
        red
        </button>
        </div>
        <div className="blue-box color-box">
        <p>blue was pressed {blueCount} times</p>
        <button onClick = {() => setBlueCount(blueCount + 1)} type ="button">
            blue
        </button>
        </div>
        
        <p>{getBiggerColoerText()}</p>
        </div>
                </>
            );
        }
//{redCount > blueCount && <p>Red bigger than blue</p>}
//{redCount < blueCount && <p>Blue bigger than red</p>}
//{redCount === blueCount && <p>blue and red are equal</p>}

export default ColorCounter;