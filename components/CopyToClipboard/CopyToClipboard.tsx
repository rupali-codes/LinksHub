import useCopyToClipboard from 'hooks/useCopyToClipboard';
import React, { useState } from 'react';
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
    setTimeout(() => setIsCopied(false), 2000); // Reset the icon after 2 seconds
  }

  return (
    <button
      className="text-theme-primary cursor-pointer bg-transparent border-none p-0"
      onClick={handleCopy}
      title="Copy link"
      aria-label={success && isCopied ? 'Link copied' : 'Copy link'}
      aria-live="polite"
    >
      {success && isCopied ? (
        <FaCheckSquare size={'1.3rem'} />
      ) : (
        <FaRegCopy size={'1.3rem'} />
      )}
    </button>
  );
};

export default CopyToClipboard;
