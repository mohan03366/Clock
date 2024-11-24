import { useEffect } from "react";
import { useState } from "react";

function Clocktime() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeinterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeinterval);
    };
  }, []);
  let date = new Date();
  return (
    <>
      <p>
        The current time is:{date.toLocaleDateString()}-{" "}
        {date.toLocaleTimeString()}
      </p>
    </>
  );
}
export default Clocktime;
