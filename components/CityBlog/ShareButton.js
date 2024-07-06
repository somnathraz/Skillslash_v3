// components/ShareButtons.js
import { useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import FaTwitter
import { FaXTwitter } from 'react-icons/fa6';
import { PiCopySimpleLight } from 'react-icons/pi';

const ShareButtons = ({ url }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleFacebookShare = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLinkedInShare = () => {
    const shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleTwitterShare = () => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 3000); // Reset message after 3 seconds
  };

  return (
    <div>
      <div className="flex gap-2 text-[20px] text-blue-600 items-center cursor-pointer"> 
        <span className="text-[#F18350] font-bold text-[14px]">Share Article :</span>
        <span className="hover:text-blue-700" onClick={handleFacebookShare}><FaFacebook/></span>
        <span className="hover:text-blue-700" onClick={handleLinkedInShare}><FaLinkedin/></span>
        <span className="hover:text-gray-700 text-[#000]" onClick={handleTwitterShare}><FaXTwitter/></span> {/* Twitter share button */}
        <span className="hover:text-gray-700 text-[#000]" onClick={handleCopyLink}><PiCopySimpleLight /></span>
        {copySuccess && <span className="text-green-500 text-[14px] ml-2">Link copied!</span>}
      </div>
    </div>
  );
};

export default ShareButtons;
