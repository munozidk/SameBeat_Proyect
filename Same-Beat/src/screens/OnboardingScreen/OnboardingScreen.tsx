import "./OnboardingScreen.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ─────────────────────────────────────────────
// SVG ASSETS
// SVG 1 → Logo:   src/assets/SameBeat-Name.svg   → className="onb-logo"
// SVG 2 → Mascot: src/assets/Mocki-Welcome.svg   → className="onb-mascot"
// ─────────────────────────────────────────────
import logoSvg   from "../../assets/SameBeat-Name.svg";
import mascotSvg from "../../assets/Mocki-Welcome.svg";

const CARDS = [
  {
    id: "c0",
    icon: "🎧",
    title: <>Let's discover <span>your tastes</span></>,
    desc:  "Answer a few questions to find your music match.",
  },
  {
    id: "c1",
    icon: "🎵",
    title: <>Your next music <span> journey here</span></>,
    desc:  "Meet people and discover concerts you'll love.",
  },
  {
    id: "c2",
    icon: "💚",
    title: <>Welcome to <span>SameBeat</span></>,
    desc:  "Connect with music lovers from all around the world.",
  },
  {
    id: "c3",
    icon: "👥",
    title: <>Find people who match <span> your vibe you</span></>,
    desc:  "Meet fans with your same music taste.",
  },
  {
    id: "c4",
    icon: "⭐",
    title: <>Never go to a concert alone.</>,
    desc:  "Find people to enjoy live concerts with.",
  },
];

const POSITIONS = ["card-1", "card-2", "card-main", "card-4", "card-5"] as const;

// slots[i] = which POSITIONS index card i currently occupies
function OnboardingScreen() {
  const navigate = useNavigate();
  const [slots, setSlots] = useState<number[]>([0, 1, 2, 3, 4]);

  const handleCardClick = (posIdx: number) => {
    const move = 2 - posIdx; // bring clicked slot to center (index 2)
    if (move === 0) return;
    setSlots(prev =>
      prev.map(p => {
        let next = p + move;
        if (next > 4) next -= 5;
        if (next < 0) next += 5;
        return next;
      })
    );
  };

  return (
    <>
      {/* ── SVG GOO FILTER (invisible, required for background effect) ── */}
      <svg xmlns="http://www.w3.org/2000/svg" className="onb-goo-svg">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="45" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 35 -15"
            result="goo"
          />
        </filter>
      </svg>

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="onb-gooey-container">
        <div className="onb-blob onb-blob1" />
        <div className="onb-blob onb-blob2" />
        <div className="onb-blob onb-blob3" />
        <div className="onb-blob onb-blob4" />
        <div className="onb-blob5" />
      </div>

      {/* ── MAIN CONTAINER ── */}
      <main className="onb-container">

        {/* SVG 1 — Logo (SameBeat-Name.svg) */}
        <img src={logoSvg} alt="SameBeat Logo" className="onb-logo" />

        {/* ── CARDS ── */}
        <section className="onb-cards">
          {CARDS.map((card, i) => (
            <article
              key={card.id}
              className={`onb-card ${POSITIONS[slots[i]]}`}
              onClick={() => handleCardClick(slots[i])}
            >
              <div className="onb-icon-circle">{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.desc}</p>
            </article>
          ))}
        </section>

        {/* SVG 2 — Mascot (Mocki-Welcome.svg) */}
        <img src={mascotSvg} alt="Mascot" className="onb-mascot" />

        {/* ── BUTTON ── */}
        <button className="onb-btn" onClick={() => navigate("/signup")}>
          Let's get started
        </button>

      </main>
    </>
  );
}

export default OnboardingScreen;