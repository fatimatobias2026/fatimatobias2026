import useTimer from "../../hooks/useTimer";
import HeaderLine from "../atoms/HeaderLine";
import TimerLine from "../atoms/TimerLine";

const Countdown = () => {
  const { timeLeft } = useTimer(new Date("2026-05-18T14:00:00"));

  return (
    <div className="countdown">
      <TimerLine />
      <h1 className="page-top-header">Bröllopsdag om</h1>
      <div className="content">
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
