import "./App.css";
import PuppyImage from "./components/PuppyImage";
import ConditionalDisplayProps from "./components/ConditionalDisplay";
import TaskSix from "./components/TaskSix";
import ImagesMaps from "./components/ImagesMaps";
import TakeCardInfo from "./components/TakeCardInfo";

function App() {
  return (
    <>
      <TakeCardInfo>
        <h3>Enter your card number</h3>
        <input type="text" />
        <h3>Enter your card name</h3>
        <input type="text" />
        <h3>Ener experation date</h3>
        <input type="text" />
      </TakeCardInfo>
    </>
  );
}

export default App;

//<TaskSix>
//      <ImagesMaps />
//  </TaskSix>
