
function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="section-tag">ABOUT THE PROJECT</span>

        <h1>
          Productivity starts with
          <span className="accent-text"> a better plan.</span>
        </h1>

        <p className="about-intro">
          Smart Daily Task Manager is a productivity app designed
          to help students organize their daily activities, manage
          priorities, and stay focused on what matters.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card project-overview">
          <span className="about-card-icon">✦</span>
          <h2>Project Overview</h2>
          <p>
            A simple, intuitive space to keep daily tasks organized
            and make everyday planning easier.
          </p>
          <div className="project-label">
            <span className="status-dot"></span>
            Personal Productivity App
          </div>
        </div>

        <div className="about-card">
          <span className="about-card-icon">⌘</span>
          <h2>Technologies Used</h2>
          <p>Built using modern frontend technologies.</p>
          <div className="tech-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>Vite</span>
            <span>React Router</span>
            <span>CSS</span>
          </div>
        </div>

        <div className="about-card">
          <span className="about-card-icon">◎</span>
          <h2>Project Purpose</h2>
          <p>
            To make daily planning less stressful by giving students
            a clear place to manage activities, track tasks, and
            build better organizational habits.
          </p>
        </div>
      </section>

      <section className="about-bottom">
        <p className="section-tag">THE GOAL</p>
        <h2>Less confusion. More progress.</h2>
        <p>
          A focused, easy-to-use task management experience
          designed around everyday productivity.
        </p>
      </section>
    </main>
  );
}

export default About;
