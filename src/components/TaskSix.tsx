import { ReactNode, useState, Children } from "react";
import "../index.css";

interface TaskSixProps {
  children: ReactNode;
}

function TaskSix({ children }: TaskSixProps) {
  const [picture, setPicture] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setPicture(!picture)}>
        {picture ? "Hide images" : "Show images"}
      </button>
      {picture && children}
    </>
  );
}
export default TaskSix;
