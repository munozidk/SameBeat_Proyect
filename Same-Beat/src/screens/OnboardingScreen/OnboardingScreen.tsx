import "./OnboardingScreen.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/SameBeat-Name.svg";
import mascot from "../../assets/Mocki-Welcome.svg";

function OnboardingScreen() {

  const [positions, setPositions] = useState([
    "card-1",
    "card-2",
    "card-main",
    "card-4",
    "card-5"
  ]);

  const moveCards = (clickedPos: string) => {

    let move = 0;

    switch(clickedPos){

      case "card-1":
        move = 2;
        break;

      case "card-2":
        move = 1;
        break;

      case "card-main":
        move = 0;
        break;

      case "card-4":
        move = -1;
        break;

      case "card-5":
        move = -2;
        break;

    }

    const newPositions = [...positions];

    positions.forEach((_, index) => {

      let newIndex = index + move;

      if(newIndex > 4){
        newIndex -= 5;
      }

      if(newIndex < 0){
        newIndex += 5;
      }

      newPositions[index] = positions[newIndex];

    });

    setPositions(newPositions);

  };

  return (

    <div className="onboarding-screen">

      {/* SVG FILTER */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          width: 0,
          height: 0
        }}
      >

        <defs>

          <filter id="goo">

            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="45"
              result="blur"
            />

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

        </defs>

      </svg>

      {/* BACKGROUND */}
      <div className="gooey-container">

        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>

      </div>

      <main className="container">

        {/* LOGO */}
        <img
          src={logo}
          alt="SameBeat Logo"
          className="logo"
        />

        {/* CARDS */}
        <section className="cards">

          {[
            {
              title: "Let's discover",
              span: "your tastes",
              text: "Answer a few questions to find your music match.",
              icon: "🎧"
            },
            {
              title: "Your next music journey",
              span: "here",
              text: "Meet people and discover concerts you’ll love.",
              icon: "🎵"
            },
            {
              title: "Welcome to",
              span: "SameBeat",
              text: "Connect with music lovers from all around the world.",
              icon: "💚"
            },
            {
              title: "Find people who match your vibe",
              span: "you",
              text: "Meet fans with your same music taste.",
              icon: "👥"
            },
            {
              title: "Never go to a concert alone.",
              span: "",
              text: "Find people to enjoy live concerts with.",
              icon: "⭐"
            }

          ].map((card, index) => (

            <article
              key={index}
              className={`card ${positions[index]}`}
              onClick={() => moveCards(positions[index])}
            >

              <div className="icon-circle">
                {card.icon}
              </div>

              <h2>
                {card.title}

                {card.span && (
                  <span> {card.span}</span>
                )}
              </h2>

              <p>
                {card.text}
              </p>

            </article>

          ))}

        </section>

        {/* MASCOT */}
        <img
          src={mascot}
          alt="Mascot"
          className="mascot"
        />

        {/* BUTTON */}
        <Link
          to="/signup"
          className="start-link"
        >

          <button className="btn-start">
            Let’s get started
          </button>

        </Link>

      </main>

    </div>
  );
}

export default OnboardingScreen;