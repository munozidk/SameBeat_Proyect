import React from 'react';
import StoryThumbnail, { StoryThumbnailProps } from './StoryThumbnail';
import styles from './StoriesContainer.module.css';

interface StoriesContainerProps {
  stories: Omit<StoryThumbnailProps, 'onClick'>[];
  onStoryClick: (id: number) => void;
}

const StoriesContainer: React.FC<StoriesContainerProps> = ({ stories, onStoryClick }) => {
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

export default StoriesContainer;
