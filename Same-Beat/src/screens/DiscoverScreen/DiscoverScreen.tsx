import DiscoverCard from '../../components/DiscoverCard/DiscoverCard'
import Suggestions from '../../components/Suggestions/Suggestions'
import NowPlaying from '../../components/NowPLaying/NowPlaying'
import ChatList from '../../components/ChatList/ChatList'
import { songs, chats, users } from '../../data'
import './SDiscoverScreen.css'

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

  const chatPreviews = chats.slice(0, 3).map(chat => {
    const user = users.find(u => u.id === chat.userId)
    return {
      id: chat.id,
      name: user?.username ?? 'Unknown',
      image: user?.image ?? ''
    }
  })

  return (
    <div className="discover-screen">

      {/* Columna central */}
      <div className="discover-screen__feed-col">

        <Suggestions />

        <h2 className="discover-screen__title">Discover</h2>

        <div className="discover-screen__grid">
          {discoverSongs.map(song => (
            <DiscoverCard key={song.id} songs={[song]} />
          ))}
        </div>

      </div>

      {/* Panel derecho — solo desktop */}
      <aside className="discover-screen__right-panel">
        <ChatList chats={chatPreviews} />
        <NowPlaying songs={songs} />
      </aside>

    </div>
  )
}