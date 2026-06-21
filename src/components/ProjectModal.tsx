import React from 'react';
import { Modal } from 'react-responsive-modal';
import PlatformIcons from './PlatformIcons';
import 'react-responsive-modal/styles.css';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    videoId?: string | null;
    coverImage?: string;
    screenshots: string[];
    fullDescription: string;
    features: string[];
    techStack: string;
    headerColor?: string;
    company?: string;
    role?: string;
    platforms?: { name: string; url: string }[];
  } | null;
}

function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  const modalStyles = {
    modal: {
      borderRadius: '16px',
      padding: 0,
      maxWidth: '900px',
      width: '90%',
      backgroundColor: '#ffffff',
      overflow: 'hidden',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    closeButton: {
      top: '15px',
      right: '15px',
      color: '#000000',
      fontSize: '24px',
      cursor: 'pointer',
      zIndex: 10,
    },
  } as const;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      styles={modalStyles}
    >
      {/* Header — without scroll area */}
      <div
        style={{
          backgroundColor: project.headerColor || '#5000ca',
          padding: '16px 24px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            margin: 0,
            color: '#ffffff',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          {project.title}
        </h2>
      </div>

      {/* Content — scrolling area*/}
      <div
        style={{
          padding: '24px',
          maxHeight: '70vh',
          overflowY: 'auto',
        }}
      >
        {/* Preview image, video */}
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            marginBottom: '20px',
            backgroundColor: '#1a1a1a',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {project.videoId ? (
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              src={`https://www.youtube.com/embed/${project.videoId}`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <img
              src={project.coverImage || '/images/placeholder.jpg'}
              alt={project.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
        </div>

        {/* platform icons */}
<PlatformIcons platforms={project.platforms} />

        {/* Description */}    
<div
  style={{
    fontSize: '16px',
    lineHeight: 1.5,
    marginBottom: '20px',
    color: '#000000',
  }}
>
     {/* Tech stack */} 
  <p style={{ color: '#000000' }}><strong>Tech stack:</strong> {project.techStack}</p>

     {/* Company */} 
  {project.company && (
  <p style={{ color: '#000000' }}><strong>Company:</strong> {project.company}</p>
    )}
     {/* Role */} 
    <p style={{ color: '#000000' }}><strong>Role:</strong> {project.role}</p>

  <p style={{ color: '#000000' }}><strong>Key features:</strong></p>
  <ul style={{ color: '#000000' }}>
    {project.features.map((feature: string, index: number) => (
      <li key={index} style={{ color: '#000000' }}>{feature}</li>
    ))}
  </ul>
  <p style={{ color: '#000000' }}>{project.fullDescription}</p>
</div>
        {/* Screenshots — grig 2 columns */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
              marginBottom: '20px',
            }}
          >
            {project.screenshots.map((src: string, index: number) => (
              <img
                key={index}
                src={src}
                alt={`Screenshot ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                }}
              />
            ))}
          </div>
        )}

        {/* Close button */}
        <div style={{ textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 24px',
              backgroundColor: project.headerColor || '#5000ca',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ProjectModal;