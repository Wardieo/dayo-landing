import communityPhoto from "../assets/dayoclub1.png";

const sports = [
  "Basketball",
  "Volleyball",
  "Football",
  "Futsal",
  "Pickleball",
  "Table tennis",
  "Tennis",
  "Badminton",
  "Sepak takraw",
];
const values = [
  [
    "01",
    "A place for every player.",
    "New to a sport or already a regular? We want everyone to feel welcome, find their people, and enjoy being part of the game.",
  ],
  [
    "02",
    "Local connections matter.",
    "A nearby court or field can be the start of a new friendship. Dayo brings players and places together around a shared love of sport.",
  ],
  [
    "03",
    "Respect is part of the game.",
    "Good games start with how we treat each other. We believe in fair play, care for shared spaces, and respect for every player.",
  ],
];

export default function About() {
  return (
    <main className="about-page">
      <section
        className="about-hero section-width"
        aria-labelledby="about-title"
      >
        <a href="/" className="text-link about-back">
          ← Back to home
        </a>
        <div className="eyebrow">
          <span className="status-dot" /> ABOUT DAYO
        </div>
        <h1 id="about-title">
          More than a game.
          <br />
          <span>A community in motion.</span>
        </h1>
        <p>
          We bring people, places, and sports together — so finding your next
          game feels a little easier, and being part of it means a little more.
        </p>
        <div className="about-hero-bottom">
          <span>EVERY SPORT. ONE COMMUNITY.</span>
          <span>BASED IN BUTUAN CITY, PHILIPPINES ↗</span>
        </div>
      </section>
      <section
        className="about-story section-width reveal"
        aria-labelledby="story-title"
      >
        <div className="about-story-image">
          <img
            src={communityPhoto}
            alt="Members of the Dayo basketball community together on an outdoor court"
          />
          <span>THE GAME BRINGS US TOGETHER.</span>
        </div>
        <div className="about-story-copy">
          <div className="eyebrow">WHY WE’RE HERE</div>
          <h2 id="story-title">
            A shared love of sport.
            <br />A simpler way to connect.
          </h2>
          <p>
            Sport has a way of turning strangers into teammates. It gives us a
            reason to step outside, try something new, and keep showing up for
            each other.
          </p>
          <p>
            Dayo is a sports community app that helps players discover places to
            play and connect with other people who love the game. We bring those
            connections into one place, across nine sports.
          </p>
          <p>
            From a casual game with friends to finding a new local crew, our
            purpose is simple: make more room for sport in everyday life.
          </p>
        </div>
      </section>
      <section
        className="about-values section-width reveal"
        aria-labelledby="values-title"
      >
        <div className="eyebrow">WHAT WE PLAY FOR</div>
        <h2 id="values-title">The things that bring us together.</h2>
        <div className="about-values-grid">
          {values.map(([number, title, text]) => (
            <article key={number}>
              <span className="about-value-number">{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="about-sports section-width reveal"
        aria-labelledby="about-sports-title"
      >
        <div className="eyebrow">YOUR SPORT BELONGS HERE</div>
        <h2 id="about-sports-title">
          Nine ways to play.
          <br />
          One place to connect.
        </h2>
        <p>
          On the court, across the field, or at the table — Dayo is for the
          games you love and the people you share them with.
        </p>
        <ul className="sports-grid">
          {sports.map((sport, index) => (
            <li key={sport}>
              <span className="sport-index">0{index + 1}</span>
              {sport}
              <span className="sport-plus" aria-hidden="true">
                ✳
              </span>
            </li>
          ))}
        </ul>
      </section>
      <section
        className="about-connect section-width reveal"
        aria-labelledby="connect-title"
      >
        <div>
          <div className="eyebrow">LET’S BUILD THE COMMUNITY TOGETHER</div>
          <h2 id="connect-title">
            Players. Court owners.
            <br />
            People who care about sport.
          </h2>
          <p>
            Find your next game in the app, bring your court to Dayo, or get in
            touch with our team. We’d love to hear from you.
          </p>
          <div className="about-connect-actions">
            <a href="/#download" className="button">
              Download Dayo <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://dayo-courts.pages.dev/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              Become a partner <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="about-contact-card">
          <span className="eyebrow">SAY HELLO</span>
          <a href="mailto:dayo.ph.it.services@gmail.com">
            dayo.ph.it.services@gmail.com ↗
          </a>
          <address>
            Butuan City, Agusan del Norte
            <br />
            Philippines
          </address>
          <a
            className="text-link"
            href="https://dayo-terms.pages.dev/guidelines"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our community guidelines ↗
          </a>
        </div>
      </section>
    </main>
  );
}
