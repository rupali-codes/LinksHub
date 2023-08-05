import useCopyToClipboard from 'hooks/useCopyToClipboard';
import React, { useState } from 'react';
import { FaRegCopy, FaCheckSquare } from 'react-icons/fa';

type CopyToClipboardProps = {
  url: string;
};

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const [isHovering, setIsHovering] = useState(false);

  function handleCopy(e: React.MouseEvent<SVGElement, MouseEvent>) {
    e.stopPropagation();
    copyToClipboard(url);
  }

  return (
    <div
      className="dropdown dropdown-left dropdown-hover"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <button style={{ position: 'relative' }}>
        {success ? ( // Render the FaCheckSquare icon if success is true
          <FaCheckSquare
            size={'1.3rem'}
            className="text-theme-primary cursor-pointer"
            onClick={(e) => handleCopy(e)}
            aria-label="Link copied" // Add aria-label for accessibility
          />
        ) : (
          <FaRegCopy // Otherwise, render the default FaRegCopy icon
            size={'1.3rem'}
            className="text-theme-primary cursor-pointer"
            onClick={(e) => handleCopy(e)}
            aria-label="Copy link to clipboard" // Add aria-label for accessibility
          />
        )}
        {isHovering && (
          <p
            className="bg-theme-secondary text-white text-sm rounded-lg px-3 py-1 cursor-default absolute top-[-2rem] left-[50%] translate-x-[-75%] z-10"
          >
            {success ? 'Copied!' : 'Copy'}
          </p>
        )}
      </button>
    </div>
  );
};

export default CopyToClipboard;
