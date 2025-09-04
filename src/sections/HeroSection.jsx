const HeroSection = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          draggable="false"
          src="/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[4.5rem] object-auto scale-100"
        />
        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffeine</h1>
            </div>
          </div>

          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">
            <p>Chug a Spylt</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
