export const shareToFacebook = (url) => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, 'facebook-share-dialog', 'width=800,height=600');
};

export const shareToLinkedIn = (url, title, summary) => {
  const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`;
  window.open(linkedInShareUrl, 'linkedin-share-dialog', 'width=800,height=600');
};

export const copyToClipboard = (url) => {
  navigator.clipboard.writeText(url)
    .then(() => {
      console.log('Link copied to clipboard');
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
    });
};

export const shareTo = (url, title, summary, platform) => {
  switch (platform) {
    case 'facebook':
      shareToFacebook(url);
      break;
    case 'linkedin':
      shareToLinkedIn(url, title, summary);
      break;
    case 'copy':
      copyToClipboard(url);
      break;
    default:
      console.warn(`Unsupported platform: ${platform}`);
  }
};
