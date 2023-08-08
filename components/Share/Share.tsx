import React from "react";
import { FiShare2 } from "react-icons/fi";
import { Tooltip } from "react-tooltip";

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
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      console.log("Web Share API not supported on this browser.");
      // Fallback behavior when Web Share API is not supported (e.g., open a new tab with the URL)
      window.open(url, "_blank");
    }
  }

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <button
        data-tooltip-id="share-tooltip"
        data-tooltip-content="Share"
        data-tooltip-place="bottom"
        aria-label="Share this link"
        role="button"
      >
        <FiShare2
          size={"1.2rem"}
          className="text-theme-primary cursor-pointer"
          onClick={handleShare}
          aria-hidden="true"
        />
      </button>
      <Tooltip
        id="share-tooltip"
        style={{
          backgroundColor: "#8b5cf6",
          fontSize: "13px",
          paddingLeft: "6px",
          paddingRight: "6px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
      />
    </div>
  );
};

export default Share;
