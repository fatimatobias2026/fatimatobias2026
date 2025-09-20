import useIsMobile from "../../hooks/useIsMobile";
import useTimer from "../../hooks/useTimer";
import HeaderLine from "../atoms/HeaderLine";
import TimerLine from "../atoms/TimerLine";

const Countdown = () => {
  const { timeLeft } = useTimer(new Date("2026-05-30T15:30:00"));
  const isMobile = useIsMobile();

  return (
    <div className="countdown">
      <TimerLine />
      <h1 className="page-top-header">Bröllopsdag om</h1>
      <div className={isMobile ? "content-mobile" : "content-desktop"}>
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label"> {label} </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countdown;
