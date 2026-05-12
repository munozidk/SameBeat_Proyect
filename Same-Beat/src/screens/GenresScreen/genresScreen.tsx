import "./genresScreen.css";

import {
  Search,
  MapPin,
  Star,
  Mic,
  Guitar,
  SlidersHorizontal,
  Heart,
  Headphones,
  Music,
  Flame,
  Smile,
} from "lucide-react";

const genres = [
  {
    title: "K-pop",
    icon: <Star />,
    color: "yellow",
  },
  {
    title: "Hip-Hop",
    icon: <Mic />,
    color: "purple",
  },
  {
    title: "Rock",
    icon: <Guitar />,
    color: "yellow",
  },
  {
    title: "Electronica",
    icon: <SlidersHorizontal />,
    color: "purple",
  },
  {
    title: "R&B",
    icon: <Heart />,
    color: "yellow",
  },
  {
    title: "Soul",
    icon: <Headphones />,
    color: "purple",
  },
  {
    title: "Pop",
    icon: <Music />,
    color: "yellow",
  },
  {
    title: "Reggaeton",
    icon: <Flame />,
    color: "purple",
  },
  {
    title: "Indie",
    icon: <Smile />,
    color: "yellow",
  },
];

const GenresScreen = () => {
  return (
    <div className="genres-screen-page">

      {/* SVG FILTER */}

      <svg xmlns="http://www.w3.org/2000/svg">

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
              0 0 0 35 -15
            "
            result="goo"
          />

        </filter>

      </svg>

      {/* BACKGROUND */}

      <div className="gooey-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <div className="blob blob4"></div>
        <div className="blob blob5"></div>
      </div>

      {/* MAIN */}

      <main className="container">

        <h1>
          Pick concerts
        </h1>

        <p>
          Select one or more genres you enjoy.
        </p>

        {/* SEARCH */}

        <div className="search-box">

          <Search size={24} />

          <input
            type="text"
            placeholder="Search genres..."
          />

        </div>

        {/* LOCATION */}

        <div className="location-row">

          <div className="location-text">

            <MapPin size={20} />

            <span>
              Use my location
            </span>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              defaultChecked
            />

            <span className="slider"></span>

          </label>

        </div>

        {/* GENRES */}

        <section className="genres-grid">

          {genres.map((genre) => (

            <div
              key={genre.title}
              className={`card ${genre.color}`}
            >

              {genre.icon}

              <h3>
                {genre.title}
              </h3>

            </div>

          ))}

        </section>

        {/* BUTTON */}

        <button className="ticket-btn">

          <span>
            Get tickets
          </span>

        </button>

      </main>

    </div>
  );
};

export default GenresScreen;