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
      const timeout = setTimeout(() => setIsCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  return (
    <button
      className="text-theme-primary cursor-pointer bg-transparent border-none p-0"
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
      {success && isCopied && (
        <div
          className="tooltip"
          style={{
            position: 'absolute',
            top: '-2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            borderRadius: '4px',
            padding: '4px 8px',
          }}
        >
          Link Copied!
        </div>
      )}
    </button>
  );
};

export default CopyToClipboard;
