
function Home() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-copy">
          <span className="section-tag">YOUR PERSONAL WORKSPACE</span>

          <h1>
            Make today
            <br />
            <span className="accent-text">count.</span>
          </h1>

          <p>
            Stay organized, keep your priorities clear, and turn
            your daily plans into meaningful progress.
          </p>

          <div className="hero-date">
            <span className="date-icon">◷</span>
            <div>
              <span className="date-label">TODAY</span>
              <strong>{today}</strong>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="visual-center">
            <span className="visual-spark">✦</span>
            <span className="visual-check">✓</span>
          </div>

          <div className="floating-note note-top">
            <span className="note-check">✓</span>
            <span>Stay focused</span>
          </div>

          <div className="floating-note note-bottom">
            <span className="note-dot"></span>
            <span>One step at a time</span>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <article className="stat-card stat-primary">
          <div className="stat-top">
            <span>Total tasks</span>
            <span className="stat-icon">▤</span>
          </div>
          <strong className="stat-number">4</strong>
          <p>Your current task count</p>
        </article>

        <article className="stat-card">
          <div className="stat-top">
            <span>Your focus</span>
            <span className="stat-icon">◎</span>
          </div>
          <strong className="stat-word">Stay consistent</strong>
          <p>Small steps create progress</p>
        </article>

        <article className="stat-card">
          <div className="stat-top">
            <span>Daily intention</span>
            <span className="stat-icon">✦</span>
          </div>
          <strong className="stat-word">Make it count</strong>
          <p>Give your priorities attention</p>
        </article>
      </section>

      <section className="home-bottom">
        <div>
          <span className="section-tag">A BETTER DAILY ROUTINE</span>
          <h2>Progress over perfection.</h2>
          <p>
            Organize your work, focus on what matters, and make
            every day a little more productive.
          </p>
        </div>

        <div className="progress-decoration" aria-hidden="true">
          <span>PLAN</span>
          <span className="progress-line"></span>
          <span>FOCUS</span>
          <span className="progress-line"></span>
          <span>GROW</span>
        </div>
      </section>
    </main>
  );
}

export default Home;
