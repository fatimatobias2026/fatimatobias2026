import TimelineItem from "./TimelineItem";

const timelinepic6 = require("../../assets/pictures/timelinepic6.jpg");
const timelinepic5 = require("../../assets/pictures/timelinepic5.jpg");
const timelinepic4 = require("../../assets/pictures/timelinepic4.jpg");
const timelinepic3 = require("../../assets/pictures/timelinepic3.jpg");
const timelinepic2 = require("../../assets/pictures/timelinepic2.jpg");
const timelinepic1 = require("../../assets/pictures/timelinepic1.jpg");
const timelinepic0 = require("../../assets/pictures/coolhalopicture.jpg");

const Timeline = () => {
  return (
    <div className="timeline">
      <TimelineItem
        text={
          "Efter lite övertalning från Tobias följde Fatima med på en dejt vid Ölstugan Tullen Kvillebäcken en mörk och regnig tisdag i november. Det var passande då de båda var Hisingsbor. \n\n Det blev fler dejter, julmarknad på Liseberg, en vinterpicknick isnön på Slottsskogen och en långpromenad till Sillviks strand i Torslanda. Det var deras första vinter tillsammans. Det de inte visste då var att det skulle bli många fler vintrar tillsammans"
        }
        header={"November 2022"}
        imagePath={timelinepic6}
      />
      <TimelineItem
        text={
          "Trots att Tobias vid denna tidpunkten bodde på samma gata som Fatimas mamma dröjde det några månader innan de introducerades på riktigt. Några veckor senare blev det även en tur till Tobias sommarstuga vid Nysockensjön där Fatima fick träffa hans föräldrar. \n\n Sommarsemestern avslutade Fatima och Tobias med en resa till vackra Österlen som bjöd på allt annat än sommarväder - endast regn och rusk."
        }
        header={"Sommaren 2023"}
        imagePath={timelinepic5}
      />
      <TimelineItem
        text={
          "Fatima och Tobias började leva mer och mer i resväskor. Det dröjde inte länge förrän Tobias flyttade in hos Fatima."
        }
        header={"Hösten 2023"}
        imagePath={timelinepic4}
      />
      <TimelineItem
        text={
          "Fatima och Tobias fortsätter att leva det goda livet på 39 kvm i Kvillebäcken."
        }
        header={"År 2024"}
        imagePath={timelinepic3}
      />
      <TimelineItem
        text={
          "Tobias friar till Fatima på Carlton Hill i Edinburgh som bjöd på en vacker vårdag med utsikt över hela staden"
        }
        header={"30 maj 2025"}
        imagePath={timelinepic2}
      />
      <TimelineItem
        text={
          "Tobias och Fatima planerar bröllop i full fart och passar på att bada när vädret tillåter."
        }
        header={"Sommaren 2025"}
        imagePath={timelinepic1}
      />
      <TimelineItem
        text={"Fatima och Tobias gifter sig…"}
        header={"aa bb cc"}
        imagePath={timelinepic0}
      />
    </div>
  );
};

export default Timeline;
