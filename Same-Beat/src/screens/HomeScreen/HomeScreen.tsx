import { useState } from 'react'
import PostFeed from '../../components/PostFeed/PostFeed'
import PostModal from '../../components/PostModal/PostModal'
import NowPlaying from '../../components/NowPLaying/NowPlaying'
import ChatList from '../../components/ChatList/ChatList'
import SearchBar from '../../components/SearchBar/SearchBar'
import Suggestions from '../../components/Suggestions/Suggestions'
import type { Post } from '../../types'
import { posts as initialPosts, chats, songs, users } from '../../data'
import './SHomeScreen.css'

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [modalOpen, setModalOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filteredPosts = posts.filter(post =>
    post.text.toLowerCase().includes(search.toLowerCase()) ||
    post.user.toLowerCase().includes(search.toLowerCase())
  )

  function handleNewPost(newPost: Post) {
    setPosts([newPost, ...posts])
  }

  // Cruzar chats con users para obtener nombre e imagen
  const chatPreviews = chats.slice(0, 3).map(chat => {
    const user = users.find(u => u.id === chat.userId)
    return {
      id: chat.id,
      name: user?.username ?? 'Unknown',
      image: user?.image ?? ''
    }
  })

return (
  <div className="home-screen">

    {/* HEADER */}
    <div className="home-screen__header">
      <h1 className="home-screen__title">Home</h1>
      <SearchBar
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search posts..."
      />
    </div>

    {/* BODY */}
    <div className="home-screen__body">

      {/* COLUMNA IZQUIERDA: Suggestions + Feed */}
      <div className="home-screen__feed-col">
        <Suggestions />          {/* 👈 dentro del feed-col */}
        <PostFeed posts={filteredPosts} />
        <button
          className="home-screen__fab"
          onClick={() => setModalOpen(true)}
        >+</button>
      </div>

      {/* COLUMNA DERECHA */}
      <aside className="home-screen__right-panel">
        <ChatList chats={chatPreviews} />
        <NowPlaying songs={songs} />
      </aside>

    </div>

    <PostModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      onSubmit={handleNewPost}
      currentPosts={posts}
    />

  </div>
)
}