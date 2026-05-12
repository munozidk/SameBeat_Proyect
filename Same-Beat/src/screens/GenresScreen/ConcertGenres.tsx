import { useState } from "react";
import styles from "./ConcertGenres.module.css";

const genres = [
  { icon: "fa-regular fa-star",       label: "K-pop",       color: "yellow" },
  { icon: "fa-solid fa-microphone",   label: "Hip-Hop",     color: "purple" },
  { icon: "fa-solid fa-guitar",       label: "Rock",        color: "yellow" },
  { icon: "fa-solid fa-sliders",      label: "Electronica", color: "purple" },
  { icon: "fa-regular fa-heart",      label: "R&B",         color: "yellow" },
  { icon: "fa-solid fa-headphones",   label: "Soul",        color: "purple" },
  { icon: "fa-solid fa-music",        label: "Pop",         color: "yellow" },
  { icon: "fa-solid fa-fire",         label: "Reggaeton",   color: "purple" },
  { icon: "fa-regular fa-face-smile", label: "Indie",       color: "yellow" },
];

/** Normaliza un string: minúsculas, sin tildes, sin guiones ni espacios */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // quita tildes
    .replace(/[-\s&]/g, "");         // quita guiones, espacios y &
}

export default function ConcertGenres() {
  const [search, setSearch]           = useState<string>("");
  const [useLocation, setUseLocation] = useState<boolean>(true);
  const [selected, setSelected]       = useState<Set<string>>(new Set());

  const filteredGenres = genres.filter((g) =>
    normalize(g.label).includes(normalize(search))
  );

  const toggleGenre = (label: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });
  };

  return (
    <div className={styles.wrapper}>

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />

      {/* SVG FILTER */}
      <svg className={styles.svgHide} xmlns="http://www.w3.org/2000/svg">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="45" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15"
            result="goo"
          />
        </filter>
      </svg>

      {/* GOOEY BACKGROUND */}
      <div className={styles.gooeyContainer}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
        <div className={`${styles.blob} ${styles.blob5}`} />
      </div>

      {/* MAIN */}
      <main className={styles.container}>

        <h1 className={styles.title}>Pick concerts</h1>
        <p className={styles.subtitle}>Select one or more genres you enjoy.</p>

        {/* SEARCH */}
        <div className={styles.searchBox}>
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`} />
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search genres..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className={styles.clearBtn} onClick={() => setSearch("")} aria-label="Clear search">
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>

        {/* LOCATION */}
        <div className={styles.locationRow}>
          <div className={styles.locationText}>
            <i className={`fa-solid fa-location-dot ${styles.locationIcon}`} />
            <span>Use my location</span>
          </div>
          <label className={styles.switch}>
            <input
              className={styles.switchInput}
              type="checkbox"
              checked={useLocation}
              onChange={(e) => setUseLocation(e.target.checked)}
            />
            <span className={styles.slider} />
          </label>
        </div>

        {/* CARDS */}
        <section className={styles.genresGrid}>
          {filteredGenres.length > 0 ? (
            filteredGenres.map(({ icon, label, color }) => (
              <div
                key={label}
                className={[
                  styles.card,
                  styles[color],
                  selected.has(label) ? styles.selected : "",
                ].join(" ")}
                onClick={() => toggleGenre(label)}
                role="checkbox"
                aria-checked={selected.has(label)}
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && toggleGenre(label)}
              >
                <i className={`${icon} ${styles.cardIcon}`} />
                <h3 className={styles.cardLabel}>{label}</h3>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No genres found for "{search}"</p>
          )}
        </section>

        {/* BUTTON */}
        <button
          className={[
            styles.ticketBtn,
            selected.size > 0 ? styles.ticketBtnActive : "",
          ].join(" ")}
        >
          <i className={`fa-solid fa-ticket ${styles.ticketIcon}`} />
          <span>
            Get tickets{selected.size > 0 ? ` (${selected.size})` : ""}
          </span>
        </button>

      </main>
    </div>
  );
}