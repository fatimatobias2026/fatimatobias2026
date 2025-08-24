import { useEffect, useState } from "react";

function useTimer(initialDate: Date) {
  const getTimeLeft = () => {
    const totalTimeLeft = initialDate.getTime() - new Date().getTime();
    const dagar = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const timmar = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minuter = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const sekunder = Math.floor((totalTimeLeft / 1000) % 60);
    return { dagar, timmar, minuter, sekunder };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    timeLeft,
  };
}

export default useTimer;
