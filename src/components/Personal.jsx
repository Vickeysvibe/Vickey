import React from "react";
import { Link } from "react-router-dom";
import "../css/personal.css";
import photos from "../data/photos";
import { Navbar } from "./Navbar";
import { PhotoGallery } from "./PhotoGallery";
import { SocialLinks } from "./SocialLinks";

// "/personal": the off-the-clock side, kept apart from the professional portfolio.
export const Personal = () => (
  <div className="personal">
    <Navbar />
    <header className="personal-intro stagger">
      <Link to="/" className="back-link">
        ← Back to work
      </Link>
      <h1 className="name">Off the clock</h1>
      <p>
        Things I saw. Moments I kept. Little pieces of life that caught my eye.
        No theme, no plan. Just moments worth keeping.
      </p>
    </header>
    <main className="personal-body">
      {photos.length ? (
        <PhotoGallery photos={photos} />
      ) : (
        <p className="personal-empty">Photos coming soon.</p>
      )}
    </main>
    <footer className="social-icons">
      <SocialLinks icons />
    </footer>
  </div>
);
