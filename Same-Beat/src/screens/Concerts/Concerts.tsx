import { useNavigate } from 'react-router-dom';
import ConcertCard from "../../components/ConcertCard/ConcertCard";
import { concerts } from '../../data/concerts/concerts';
import { useFilter } from '../../contexts/FilterContext';
import './Concerts.css';

const ConcertsScreen = () => {
  const navigate = useNavigate();
  const { selectedGenres } = useFilter();

  const filteredConcerts = selectedGenres.length > 0
    ? concerts.filter(concert => selectedGenres.includes(concert.genre))
    : concerts;

  return (
    <div className="screen-container">
      <div className="concerts-list space-y-4">
        {filteredConcerts.length > 0 ? (
          filteredConcerts.map((concert) => (
            <ConcertCard 
              key={concert.id}
              artist={concert.artist}
              tour={concert.tour}
              date={concert.date}
              location={concert.location}
              venue={concert.venue}
              capacity={concert.capacity}
              openingTime={concert.openingTime}
              image={concert.image}
              onClick={() => navigate(`/concert/${concert.id}`)}
            />
          ))
        ) : (
          <div className="text-center py-10 text-white/50">
            No concerts found for the selected genres.
          </div>
        )}
      </div>

      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'rgba(168, 85, 247, 0.8)',
          color: 'white',
          padding: '12px 20px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.2)',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
        }}
        onClick={() => navigate('/profile')}
      >
        Go to Profile (Temp)
      </button>
    </div>
  );
};

export default ConcertsScreen;