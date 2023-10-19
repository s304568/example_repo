import { ReactNode, useState } from "react";

interface TakeCardInfoProps {
  children: ReactNode;
}

function TakeCardInfo({ children }: TakeCardInfoProps) {
  const [scam, setScam] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setScam(!scam)}>
        {scam ? "Please Enter your info" : "You got scammed BOZO"}
      </button>
      {scam && children}
    </>
  );
}

export default TakeCardInfo;
