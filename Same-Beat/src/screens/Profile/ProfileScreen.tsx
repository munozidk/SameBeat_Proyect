import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileUsername from '../../components/Profile/ProfileUsername';
import ProfileHeaderInfo from '../../components/Profile/ProfileHeaderInfo';
import ProfileBio from '../../components/Profile/ProfileBio';
import ProfileActions from '../../components/Profile/ProfileActions';
import BackButton from '../../components/BackButton/BackButton';
import StoriesSection from '../../components/Stories/StoriesSection';
import StoryViewerScreen from '../Stories/StoryViewerScreen';
import type { UserProfile, Concert } from '../../types/types';
import userProfileData from '../../data/profile/userProfile.json';
import concertsData from '../../data/concerts/concerts.json';
import styles from './ProfileScreen.module.css';

// ✅ Tipado correcto para los datos JSON
const userProfile: UserProfile = userProfileData as unknown as UserProfile;
const concerts: Concert[] = concertsData as unknown as Concert[];

const ProfileScreen: React.FC = () => {
  // ✅ storiesData con todas las propiedades necesarias
  const storiesData = concerts.map((c: Concert) => ({
    id: c.id,
    title: c.artist,
    thumbnail: c.image,
    images: [c.image],
    subtitle: c.tour,
    caption: c.tour,
    description: c.description,
    themeColor: c.themeColor
  }));

  const [selectedStory, setSelectedStory] = useState<typeof storiesData[0] | null>(null);

  const handleStoryClick = (id: number) => {
    const story = storiesData.find(s => s.id === id);
    if (story) setSelectedStory(story);
  };

  const closeViewer = () => setSelectedStory(null);

  return (
    <motion.div
      className={styles.screenContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <BackButton />
      <div className={styles.profileCard}>
        <ProfileUsername username={userProfile.username} />

        <div className={styles.contentScroll}>
          <ProfileHeaderInfo
            name={userProfile.name}
            age={userProfile.age}
            followers={userProfile.followers}
            following={userProfile.following}
            concerts={userProfile.concerts}
          />
          <ProfileBio
            bio={userProfile.bio}
            city={userProfile.city}
            country={userProfile.country}
            favoriteArtist={userProfile.favoriteArtist}
            favoriteSong={userProfile.favoriteSong}
          />
          <ProfileActions
            onEdit={() => console.log('Edit Profile')}
            onMessages={() => console.log('Messages')}
          />
          <StoriesSection
            stories={storiesData}
            onStoryClick={handleStoryClick}
          />
        </div>
      </div>

      <AnimatePresence>
        {selectedStory && (
          <StoryViewerScreen
            story={selectedStory}
            onClose={closeViewer}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProfileScreen;
