import useCopyToClipboard from 'hooks/useCopyToClipboard';
import React, { useState, useEffect } from 'react';
import { FaRegCopy, FaCheckSquare } from 'react-icons/fa';

type CopyToClipboardProps = {
  url: string;
};

export const CopyToClipboard = ({ url }: CopyToClipboardProps): JSX.Element => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    copyToClipboard(url);
    setIsCopied(true);
  }

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => setIsCopied(false), 3500);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <div 
      className="dropdown dropdown-left dropdown-hover"
      >
      <button
        className="text-theme-primary cursor-pointer relative bg-transparent border-none p-0"
        onClick={handleCopy}
        title={success && isCopied ? 'Link copied' : 'Copy link'}
        aria-label="Copy link to clipboard"
        aria-live="polite"
      >
        {success && isCopied ? (
          <FaCheckSquare size={'1.3rem'} />
        ) : (
          <FaRegCopy size={'1.3rem'} />
        )}
      </button>
      {success && isCopied && (
        <p
          className="bg-theme-secondary text-white text-sm rounded-lg px-3 py-1 cursor-default"
            style={{
              position: 'absolute',
              top: '-2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1,
          }}
        >
          Link Copied!
        </p>
      )}
    </div>
  );
};

export default CopyToClipboard;
