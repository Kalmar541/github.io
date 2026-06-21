import React from 'react';
import { FaSteam, FaYandex, FaItchIo, FaGooglePlay, FaApple, FaChrome } from 'react-icons/fa';

interface PlatformIconsProps {
  platforms?: { name: string; url: string }[];
}

const platformIcons: Record<string, React.ReactElement> = {
  steam: <FaSteam size={32} />,
  yandex: <FaYandex size={32} />,
  googleplay: <FaGooglePlay size={32} />,
  apple: <FaApple size={32} />,
  itch: <FaItchIo size={32} />,
  web: <FaChrome size={32} />,
};

function PlatformIcons({ platforms }: PlatformIconsProps) {
  if (!platforms || platforms.length === 0) return null;

  return (
    <div style={{ 
      display: 'flex', 
      gap: '16px', 
      justifyContent: 'center',  // ← центрирование
      marginBottom: '20px' 
    }}>
      {platforms.map((platform, index) => (
        <a
          key={index}
          href={platform.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: '#666', transition: 'color 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#5000ca'; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#666'; }}
          title={`Available on ${platform.name}`}
        >
          {platformIcons[platform.name.toLowerCase()] || <span>🌐</span>}
        </a>
      ))}
    </div>
  );
}

export default PlatformIcons;