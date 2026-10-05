import { useEffect, useState } from "react";
import basketballPhoto from "../assets/player-avatar.webp";
import courtPhoto from "../assets/court.webp";
import communityPhoto from "../assets/community.webp";
import appScreen from "../assets/3.jpeg";
import homeScreen from "../assets/4.jpeg";
import "./App.css";
import About from "./About";

const Arrow = () => <span aria-hidden="true">↗</span>;
const DOWNLOAD_URL =
  "https://play.google.com/store/apps/details?id=com.dayosports.app&pcampaignid=web_share";
const PARTNER_URL = "https://dayo-courts.pages.dev/overview";
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
const features = [
  {
    number: "01",
    title: "Find your court.",
    text: "Discover places to play around you. Less searching, more time on the court.",
    tag: "YOUR NEXT SPOT",
    image: courtPhoto,
    alt: "Indoor basketball court with blue flooring",
  },
  {
    number: "02",
    title: "Find your people.",
    text: "Meet players, build your crew, and turn a pickup game into a regular thing.",
    tag: "YOUR KIND OF CREW",
    image: communityPhoto,
    alt: "A group of basketball players together on an outdoor court",
  },
  {
    number: "03",
    title: "Make your move.",
    text: "Explore nearby courts in one place. Your next game is closer than you think.",
    tag: "ALL IN ONE PLACE",
    image: appScreen,
    alt: "Dayo app showing a map of nearby basketball courts",
  },
];

function App() {
  const isAboutPage = /^\/about\/?$/.test(window.location.pathname);
  const homeLink = (hash: string) => isAboutPage ? `/${hash}` : hash;
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("dayo-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      /* Use the system preference when storage is unavailable. */
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("dayo-theme", theme);
    } catch {
      /* Theme still works without storage. */
    }
  }, [theme]);
  useEffect(() => {
    document.title = isAboutPage ? "About Us — Dayo" : "Dayo";
    const description = document.querySelector('meta[name="description"]');
    if (isAboutPage) description?.setAttribute("content", "Meet Dayo, a sports community app based in Butuan City, Philippines. Bringing players and places together across nine sports.");
  }, [isAboutPage]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header className="header">
        <a className="brand" href="/" aria-label="Dayo home">
          <span>
            dayo<span className="brand-dot">.</span>
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "navigation open" : "navigation"}
        >
          <a href={homeLink("#about")} onClick={() => setMenuOpen(false)}>
            Why Dayo
          </a>
          <a href={homeLink("#how-it-works")} onClick={() => setMenuOpen(false)}>
            How it works
          </a>
          <a href={homeLink("#sports")} onClick={() => setMenuOpen(false)}>
            Sports
          </a>
          <a href={homeLink("#community")} onClick={() => setMenuOpen(false)}>
            The community
          </a>
          <a href="/about" aria-current={isAboutPage ? "page" : undefined} onClick={() => setMenuOpen(false)}>
            About us
          </a>
        </nav>
        <button
          className="theme-toggle"
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
          <span className="theme-label">
            {theme === "dark" ? "Light" : "Dark"}
          </span>
        </button>
        <a className="button button-small header-cta" href={PARTNER_URL} target="_blank" rel="noopener noreferrer">
          Become a partner <Arrow />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>
      {isAboutPage ? <About /> : <main>
        <section className="hero section-width">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> THE GAME STARTS WITH YOU
            </div>
            <h1>
              Less scrolling.
              <br />
              More{" "}
              <span className="play-word">
                playing.
                <svg
                  viewBox="0 0 420 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M3 13 Q205 -6 417 10" />
                </svg>
              </span>
            </h1>
            <p>
              Your court. Your crew. Your next game.
              <br />
              Dayo brings your local sports community together — so you can just
              show up and play.
            </p>
            <div className="hero-actions">
              <a className="button" href="#download">
                Find your next game <Arrow />
              </a>
              <a className="text-link" href="#how-it-works">
                <span className="play-icon">▶</span> See how it works
              </a>
            </div>
            <div className="hero-note">
              <div className="mini-avatars">
                <img src={communityPhoto} alt="" />
                <img src={basketballPhoto} alt="" />
                <span>↗</span>
              </div>
              <div>
                Made for the love of the game.
                <br />
                <span>Built for the people who play it.</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-frame multisport-visual">
              <div className="court-lines" aria-hidden="true">
                <span />
              </div>
              <span className="visual-kicker">ONE APP. MORE WAYS TO PLAY.</span>
              <div className="hero-phone">
                <img src={homeScreen} alt="Dayo app home screen" />
              </div>
              <span className="sport-float sport-float-one">
                Football <span aria-hidden="true">↗</span>
              </span>
              <span className="sport-float sport-float-two">
                Badminton <span aria-hidden="true">↗</span>
              </span>
              <span className="sport-float sport-float-three">
                Pickleball <span aria-hidden="true">↗</span>
              </span>
              <div className="image-caption">
                <span>YOUR SPORT. YOUR PEOPLE.</span>
                <span>LET’S PLAY ↗</span>
              </div>
            </div>
            <div className="floating-label">
              <span className="location-icon">⌖</span>
              <div>
                Your next game is out there.<small>Find it with Dayo.</small>
              </div>
              <span className="label-arrow">↗</span>
            </div>
            <span className="orbit-label">GO OUT. PLAY MORE.</span>
            <div className="court-stamp" aria-hidden="true">
              <svg viewBox="0 0 60 60">
                <rect x="10" y="5" width="40" height="50" rx="2" />
                <path d="M10 30h40M20 5v12h20V5M20 55V43h20v12" />
                <circle cx="30" cy="30" r="7" />
              </svg>
            </div>
          </div>
        </section>
        <div className="manifesto-strip">
          <span>LOCAL COURTS</span>
          <span className="strip-star">✳</span>
          <span>REAL CONNECTIONS</span>
          <span className="strip-star">✳</span>
          <span>MORE GAME TIME</span>
          <span className="strip-star">✳</span>
          <span>ONE COMMUNITY</span>
          <span className="strip-star">✳</span>
        </div>
        <section
          id="sports"
          className="sports-section section-width reveal"
          aria-labelledby="sports-title"
        >
          <div className="eyebrow">NINE SPORTS. ONE COMMUNITY.</div>
          <h2 id="sports-title">
            Whatever your game,
            <br />
            there’s a place for you.
          </h2>
          <p>
            From courts to fields, find your people and make more time for the
            sport you love.
          </p>
          <ul className="sports-grid">
            {sports.map((sport, i) => (
              <li key={sport}>
                <span className="sport-index">0{i + 1}</span>
                {sport}
                <span className="sport-plus" aria-hidden="true">
                  ↗
                </span>
              </li>
            ))}
          </ul>
        </section>
        <section id="about" className="features-section section-width">
          <div className="section-heading reveal">
            <div>
              <div className="eyebrow">
                A LITTLE LESS FRICTION. A LOT MORE PLAY.
              </div>
              <h2>
                Everything you need.
                <br />
                Nothing in your way.
              </h2>
            </div>
            <p>
              Sport is better together. We make it easier to find your place,
              your people, and your next game.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card reveal" key={feature.number}>
                <div
                  className={"feature-image feature-image-" + feature.number}
                >
                  <img src={feature.image} alt={feature.alt} loading="lazy" />
                  <span className="image-tag">{feature.tag}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>
        <section id="how-it-works" className="how-section section-width reveal">
          <div className="how-intro">
            <div className="eyebrow">FROM “ANYONE DOWN?” TO GAME ON.</div>
            <h2>
              Your next game.
              <br />
              Three simple steps.
            </h2>
            <a href="#download" className="text-link">
              Let’s get you playing <Arrow />
            </a>
          </div>
          <div className="steps">
            {[
              [
                "Find your spot",
                "Explore courts near you and pick your next place to play.",
              ],
              [
                "Connect with your crew",
                "Discover the local community and find people who love the game.",
              ],
              [
                "Show up. Have fun.",
                "Bring your shoes, bring your energy. Make the court your own.",
              ],
            ].map(([title, text], i) => (
              <div className="step" key={title}>
                <span className="step-number">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <span className="step-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>
        <section
          id="community"
          className="community-section section-width reveal"
        >
          <div className="community-image">
            <img
              src={communityPhoto}
              alt="Dayo basketball community posing together after a game"
              loading="lazy"
            />
            <span className="community-caption">
              THE BEST PART OF THE GAME? THE PEOPLE.
            </span>
          </div>
          <div className="community-copy">
            <div className="eyebrow">EVERY SPORT. EVERY KIND OF PLAYER.</div>
            <h2>
              Different stories.
              <br />
              Same <span>love for the game.</span>
            </h2>
            <p>
              The first-timer. The weekend regular. The one who always says “one
              more.” There’s a place for all of us on the court.
            </p>
            <p>
              Dayo is about making those connections happen. One court, one
              crew, one game at a time.
            </p>
            <a href="#download" className="text-link">
              Find your community <Arrow />
            </a>
          </div>
        </section>
        <section
          id="download"
          className="download-section section-width reveal"
          aria-labelledby="download-title"
        >
          <div className="download-copy">
            <div className="eyebrow">
              <span className="status-dot" /> YOUR NEXT GAME, IN YOUR POCKET
            </div>
            <h2 id="download-title">
              More sports.
              <br />
              More people.
              <br />
              <span>One Dayo.</span>
            </h2>
            <p>
              Take your community with you. Discover places to play, connect
              with other players, and find your next game in the Dayo app.
            </p>
            <a
              className="store-button"
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Dayo on Google Play (opens in a new tab)"
            >
              <svg viewBox="0 0 28 32" aria-hidden="true">
                <path fill="#5bc9f4" d="M1 1v30l15-15z" />
                <path fill="#8fe078" d="M1 1l19 11-4 4z" />
                <path fill="#ffdb68" d="M20 12l7 4-7 4-4-4z" />
                <path fill="#f27c80" d="M1 31l19-11-4-4z" />
              </svg>
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
              <Arrow />
            </a>
            <span className="download-note">Available for Android.</span>
          </div>
          <div className="download-preview">
            <span className="preview-orbit" aria-hidden="true" />
            <img
              className="download-phone phone-back"
              src={appScreen}
              alt="Dayo map screen for discovering nearby courts"
              loading="lazy"
            />
            <img
              className="download-phone phone-front"
              src={homeScreen}
              alt="Dayo app home screen with community activity"
              loading="lazy"
            />
            <span className="preview-tag">FIND YOUR GAME ↗</span>
          </div>
        </section>
        <section
          id="partners"
          className="partner-section section-width reveal"
          aria-labelledby="partner-title"
        >
          <div>
            <div className="eyebrow">THE HOME COURT FOR COURT OWNERS</div>
            <h2 id="partner-title">Your court. Their next game.</h2>
            <p>
              Own or manage a sports court? Bring your venue to the Dayo
              community and connect with players looking for their next place to
              play.
            </p>
          </div>
          <a
            href={PARTNER_URL}
            className="button partner-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a partner <Arrow />
          </a>
        </section>
      </main>}
      <footer className="site-footer section-width">
        <div className="footer-top">
          <div>
            <a className="brand" href="/" aria-label="Dayo home">
              <span>
                dayo<span className="brand-dot">.</span>
              </span>
            </a>
            <p>Every sport. One community.</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:dayo.ph.it.services@gmail.com">
              dayo.ph.it.services@gmail.com <Arrow />
            </a>
            <address>
              Butuan City, Agusan del Norte
              <br />
              Philippines
            </address>
          </div>
          <nav className="footer-links" aria-label="Legal and community">
            <a href="/about" aria-current={isAboutPage ? "page" : undefined}>About us</a>
            <a
              href="https://dayo-terms.pages.dev/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of service ↗
            </a>
            <a
              href="https://dayo-terms.pages.dev/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy ↗
            </a>
            <a
              href="https://dayo-terms.pages.dev/guidelines"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community guidelines ↗
            </a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Dayo. For the love of the game.</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
export default App;
