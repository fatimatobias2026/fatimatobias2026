type TimelineItemProps = {
  text: string;
  header: string;
  imagePath: string;
  isLeft: boolean;
};

const TimelineItem = ({
  text,
  header,
  imagePath,
  isLeft,
}: TimelineItemProps) => (
  <div className="timeline-item ">
    <div className="inner">
      <div className="date"></div>
      {!isLeft && <div className="timeline-box-to-circle-line right" />}
      {isLeft && <div className="timeline-box-to-circle-line left" />}

      <div className="timeline-header">
        <h2 className="header-h2">{header}</h2>
      </div>
      {isLeft ? (
        <div className="timeline-item-content">
          <img className="timeline-image" src={imagePath} />
          <div className="timeline-textbox">
            <p className="standard-text-no-margins">{text}</p>
          </div>
        </div>
      ) : (
        <div className="timeline-item-content">
          <div className="timeline-textbox">
            <p className="standard-text-no-margins">{text}</p>
          </div>

          <img className="timeline-image" src={imagePath} />
        </div>
      )}
    </div>
  </div>
);

export default TimelineItem;
