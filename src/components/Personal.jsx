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
    <header className="personal-intro">
      <Link to="/" className="back-link">
        ← Back to work
      </Link>
      <h1 className="name">Through my lens</h1>
      <p>
        Away from the keyboard I chase light with a camera. These are a few
        frames I took and liked.
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
