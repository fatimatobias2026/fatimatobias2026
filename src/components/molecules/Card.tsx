const WelcomePage = () => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="TextGroup">
            <h2>Hjärtligt välkomna till</h2>
            <h2>vigsel mellan</h2>
          </div>
          <div className="TextGroup">
            <h2>Bla</h2>
            <h2>&</h2>
            <h2>Blä</h2>
          </div>
          <div className="TextGroup">
            <h2>lördagen</h2>
            <h2>Den 12 april</h2>
          </div>
        </div>
        <div className="flip-card-back">
          <div className="TextGroup">
            <h1>Plats</h1>
            <h2>Soptippen</h2>
          </div>
          <div className="TextGroup">
            <h1>Klädsel</h1>
            <h2>För varm</h2>
          </div>
          <div className="TextGroup">
            <h1>Barn och djur</h1>
            <h2>Nej speciellt inte fula</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
