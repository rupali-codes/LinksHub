import React from 'react';
import { FaShareAlt } from 'react-icons/fa';

type ShareProps = {
  url: string;
  title: string;
};

export const Share: React.FC<ShareProps> = ({ url, title }) => {
  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: url,
        });
        console.log('Share was successful.');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
        console.log('Web Share API not supported on this browser.');
        // Fallback behavior when Web Share API is not supported (e.g., open a new tab with the URL)
        window.open(url, '_blank');    
    }
  }

  return (
    <div className="dropdown dropdown-left dropdown-hover">
      <FaShareAlt
        size={'1.2rem'}
        className="text-theme-primary cursor-pointer"
        title="Share link"
        onClick={handleShare}
      />
      <p className="dropdown-content bg-theme-secondary text-white text-sm rounded-lg px-3 py-1 cursor-default">
        Share
      </p>
    </div>
  );
};

export default Share;
