import React from 'react';
import StoryThumbnail from './StoryThumbnail';
import styles from './StoriesContainer.module.css';

interface StoryItem {
  id: number;
  thumbnail: string;
  title: string;
}

interface StoriesSectionProps {
  stories: StoryItem[];
  onStoryClick: (id: number) => void;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ stories, onStoryClick }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollWrapper}>
        {stories.map((story) => (
          <StoryThumbnail 
            key={story.id} 
            {...story} 
            onClick={onStoryClick} 
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesSection;