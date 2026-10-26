import "./App.css";
import rogerRabbit from "../../assets/who-framed-roger-rabbit.jpg";
import hook from "../../assets/hook.jpg";
import laLaLand from "../../assets/la-la-land.jpg";
import hiddenFigures from "../../assets/hidden-figures.jpg";
import palmSprings from "../../assets/palm-springs.jpg";
import barbie from "../../assets/barbie.jpg";

// AI assistance: ChatGPT (Codex).
// Prompt: "Let's start Task 2" with the supplied specification and movie text.
// Assisted with the React page structure and reusable movie cards.

// Movie information supplied in the assessment assets.
const movies = [
  {
    title: "Who Framed Roger Rabbit (1988)",
    image: rogerRabbit,
    description:
      "In a world where cartoons and humans coexist, a detective must solve a zany, high-stakes mystery. Packed with wild humor, groundbreaking animation, and noir twists, this unique film will pull you into a world where anything is possible!",
  },
  {
    title: "Hook (1991)",
    image: hook,
    description:
      "Rediscover Neverland in this thrilling twist on Peter Pan! Robin Williams stars as a grown-up Peter, who must rediscover his inner child to rescue his kids from the clutches of Captain Hook. Adventure, magic, and nostalgia blend in this timeless family classic.",
  },
  {
    title: "La La Land (2016)",
    image: laLaLand,
    description:
      "Love, dreams, and the magic of LA take center stage in this musical masterpiece. Watch as two starry-eyed artists navigate passion and ambition in a world where every moment feels like a cinematic spectacle!",
  },
  {
    title: "Hidden Figures (2016)",
    image: hiddenFigures,
    description:
      "Three unsung heroes of NASA's space race take the spotlight in this inspiring true story. Battling discrimination and defying the odds, these brilliant African-American women prove that intelligence, perseverance, and unity can change history and break barriers.",
  },
  {
    title: "Palm Springs (2020)",
    image: palmSprings,
    description:
      "A never-ending wedding day turns into an unforgettable time-loop romance! Stuck in the same day, two strangers find love, chaos, and meaning in the most unexpected ways.",
  },
  {
    title: "Barbie (2023)",
    image: barbie,
    description:
      "Step into the dazzling world of Barbie as she embarks on an unexpected journey from her perfect doll life to the real world. Filled with humor, heart, and empowering messages, this vibrant adventure redefines what it means to dream big!",
  },
];

// Website heading and navigation.
function Header() {
  return (
    <header className="site-header">
      <h1 className="site-logo">watch.it</h1>

      <nav className="genre-navigation" aria-label="Movie genres">
        <a href="#movies">Action</a>
        <a href="#movies">Comedy</a>
        <a href="#movies">Romance</a>
        <a href="#movies">Drama</a>
      </nav>

      <button className="search-button" type="button">
        Search
      </button>
    </header>
  );
}

// Reuse the same card structure for each movie.
function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img
        className="movie-image"
        src={movie.image}
        alt={movie.title}
      />

      <div className="movie-content">
        <p>{movie.description}</p>

        <button
          className="watch-button"
          type="button"
          aria-label={`Watch ${movie.title}`}
        >
          Watch now
        </button>
      </div>
    </article>
  );
}

// Display the header and all six movie cards.
function App() {
  return (
    <>
      <Header />

      <main id="movies" className="movie-grid" aria-label="Available movies">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </main>
    </>
  );
}

export default App;