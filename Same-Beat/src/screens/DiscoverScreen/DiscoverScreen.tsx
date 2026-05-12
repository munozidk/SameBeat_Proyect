import DiscoverCard from '../../components/DiscoverCard/DiscoverCard'
import './SDiscoverScreen.css'

// datos de prueba — después se mueven a initialData.ts
const discoverSongs = [
  {
    id: 1,
    title: 'De mi enamórate',
    artists: ['Mentiras: La Serie', 'Diana Bovio'],
    coverImage: 'assets/cover.jpg',
    artistImage: 'assets/avatar 1.jpg',
    audio: 'assets/dardos.mp3'
  }
]

export default function DiscoverScreen() {
  return (
    <div className="discover-screen">
      <h2 className="discover-screen__title">Discover</h2>

      <div className="discover-screen__grid">
        {discoverSongs.map(song => (
          <DiscoverCard key={song.id} songs={[song]} />
        ))}
      </div>

    </div>
  )
}