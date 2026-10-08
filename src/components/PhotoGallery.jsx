import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../css/photography.css";

const SWIPE_PX = 50;

// Full-screen viewer: arrows / swipe to move, Esc or backdrop click to close.
const Lightbox = ({ photos, index, onChange, onClose }) => {
  const count = photos.length;
  const { src, caption } = photos[index];
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const go = useCallback(
    (step) => onChange((index + step + count) % count),
    [index, count, onChange],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Lock page scroll and move focus into the viewer; restore both on close.
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  const stop = (handler) => (e) => {
    e.stopPropagation();
    handler();
  };

  return createPortal(
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={caption || "Photo"}
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > SWIPE_PX) go(dx < 0 ? 1 : -1);
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox-close"
        onClick={stop(onClose)}
        aria-label="Close"
      >
        ×
      </button>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav prev"
          onClick={stop(() => go(-1))}
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}
      <figure onClick={(e) => e.stopPropagation()}>
        <img key={src} src={src} alt={caption} />
        <figcaption>
          {caption}
          <span>
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>
      {count > 1 && (
        <button
          type="button"
          className="lightbox-nav next"
          onClick={stop(() => go(1))}
          aria-label="Next photo"
        >
          ›
        </button>
      )}
    </div>,
    document.body,
  );
};

// Masonry grid of photos; clicking one opens the full-screen viewer.
export const PhotoGallery = ({ photos }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const close = useCallback(() => setOpenIndex(null), []);

  return (
    <>
      <div className="photo-grid">
        {photos.map(({ src, caption }, i) => (
          <button
            key={src}
            type="button"
            className="photo"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${caption || "photo"}`}
          >
            <img src={src} alt={caption} loading="lazy" decoding="async" />
            {caption && <span className="photo-caption">{caption}</span>}
          </button>
        ))}
      </div>
      {openIndex !== null && (
        <Lightbox
          photos={photos}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={close}
        />
      )}
    </>
  );
};
