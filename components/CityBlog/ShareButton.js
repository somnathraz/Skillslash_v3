// components/ShareButtons.js
import Image from 'next/image';
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
        {/* <span className="text-[#F18350] font-bold text-[14px]">Share Article :</span> */}
        <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/Facebook_black.webp" width={30} height={30} loading='lazy' alt='facebook'  className="hover:text-blue-700" onClick={handleFacebookShare}/>
        <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/LinkedIn_black.webp" width={30} height={30} loading='lazy' alt='linkidln' className="hover:text-blue-700" onClick={handleLinkedInShare}/>
        <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/Twitter_black.webp" width={30} height={30} loading='lazy' alt='twitter' className="hover:text-gray-700 text-[#000]" onClick={handleTwitterShare}/> {/* Twitter share button */}
        <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/city_Blog/Select+All.webp" width={30} height={30} loading='lazy' alt='copy' className="hover:text-gray-700 text-[#000]" onClick={handleCopyLink}/>
        {copySuccess && <span className="text-green-500 text-[14px] ml-2">Link copied!</span>}
      </div>
    </div>
  );
};

export default ShareButtons;
