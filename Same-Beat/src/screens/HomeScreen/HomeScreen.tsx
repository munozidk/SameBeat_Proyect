import { useState } from 'react'
import PostFeed from '../../components/PostFeed/PostFeed'
import PostModal from '../../components/PostModal/PostModal'
import NowPlaying from '../../components/NowPLaying/NowPlaying'
import ChatList from '../../components/ChatList/ChatList'
import type { Post } from '../../types'
import { posts as initialPosts, chats, songs, users } from '../../data'
import './SHomeScreen.css'

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [modalOpen, setModalOpen] = useState(false)

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

      <div className="home-screen__feed-col">
        <PostFeed posts={posts} />
        <button
          className="home-screen__fab"
          onClick={() => setModalOpen(true)}
        >+</button>
      </div>

      <aside className="home-screen__right-panel">
        <ChatList chats={chatPreviews} />
        <NowPlaying songs={songs} />
      </aside>

      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleNewPost}
        currentPosts={posts}
      />

    </div>
  )
}