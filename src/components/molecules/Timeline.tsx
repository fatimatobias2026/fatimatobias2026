import TimelineItem from "./TimelineItem";

const timelinepic6 = require("../../assets/pictures/timelinepic6.jpg");
const timelinepic5 = require("../../assets/pictures/timelinepic5.jpg");
const timelinepic4 = require("../../assets/pictures/timelinepic8.jpg");
const timelinepic3 = require("../../assets/pictures/timelinepic3.jpg");
const timelinepic2 = require("../../assets/pictures/timelinepic2.jpg");
const timelinepic1 = require("../../assets/pictures/timelinepic1.jpg");
const timelinepic0 = require("../../assets/pictures/timelinepic7.jpg");

const Timeline = () => {
  return (
    <div className="timeline">
      <TimelineItem
        text={
          "Fatima och Tobias gick på sin första dejt på Ölstugan Tullen Kvillebäcken. Det blev fler dejter, bland annat en julmarknad på Liseberg, en vinterpicknick i snön på Slottsskogen och en långpromenad till Sillviks strand i Torslanda."
        }
        header={"November 2022"}
        imagePath={timelinepic6}
        isLeft={true}
      />
      <TimelineItem
        text={
          "Tobias träffade för första gången Fatimas mamma, som bodde på samma gata som honom. Några veckor senare blev det en tur till Tobias sommarstuga där Fatima fick träffa Tobias föräldrar. Sommarsemestern avslutade Fatima och Tobias med en resa till Österlen."
        }
        header={"Sommaren 2023"}
        imagePath={timelinepic5}
        isLeft={false}
      />
      <TimelineItem
        text={
          "Fatima och Tobias började leva mer och mer i resväskor. Det dröjde inte länge förrän de flyttade ihop."
        }
        header={"Hösten 2023"}
        imagePath={timelinepic4}
        isLeft={true}
      />
      <TimelineItem
        text={
          "Fatima och Tobias fortsätter att leva det goda livet på 39 kvm i Kvillebäcken."
        }
        header={"År 2024"}
        imagePath={timelinepic3}
        isLeft={false}
      />
      <TimelineItem
        text={
          "Tobias friar till Fatima på Carlton Hill i Edinburgh som har vacker utsikt över hela staden."
        }
        header={"30 maj 2025"}
        imagePath={timelinepic2}
        isLeft={true}
      />
      <TimelineItem
        text={
          "Tobias och Fatima planerar bröllop i full fart och passar på att bada när vädret tillåter."
        }
        header={"Sommaren 2025"}
        imagePath={timelinepic1}
        isLeft={false}
      />
      <TimelineItem
        text={"Fatima och Tobias gifter sig…"}
        header={"30 maj 2026"}
        imagePath={timelinepic0}
        isLeft={true}
      />
    </div>
  );
};

export default Timeline;
