import { useState } from "react";
import "./Gallery.css";
import galleryData from "./GalleryData.jsx";

export default function Gallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState(0);

  const openModal = (galleryIdx, imgIdx) => {
    setSelectedGalleryIndex(galleryIdx);
    setSelectedImageIndex(imgIdx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const goPrev = () => {
    const gallery = galleryData[selectedGalleryIndex];
    const newIdx = selectedImageIndex === 0 ? gallery.images.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(newIdx);
  };

  const goNext = () => {
    const gallery = galleryData[selectedGalleryIndex];
    const newIdx = (selectedImageIndex + 1) % gallery.images.length;
    setSelectedImageIndex(newIdx);
  };

  const currentImage = galleryData[selectedGalleryIndex]?.images[selectedImageIndex];

  return (
    <section className="gallery-section">
      <header className="gallery-header">
        <h1 className="gallery-title">Memory Roll</h1>
        <p className="gallery-subtitle">One moment, one row — like a film strip in print.</p>
      </header>

      <div className="gallery-container">
        {galleryData.map((item, gIdx) => (
          <div key={gIdx} className="gallery-row-item">
            <div className="gallery-text">
              <h2 className="gallery-item-title">{item.title}</h2>
              <p className="gallery-item-desc">{item.description}</p>
            </div>

            <div className="gallery-thumbs-row">
              {item.images.map((img, iIdx) => (
                <div
                  key={iIdx}
                  className="thumb-wrapper"
                  onClick={() => openModal(gIdx, iIdx)}
                >
                  <img src={img.src} alt={img.alt} className="thumb" />
                  <div className="thumb-overlay">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {modalOpen && currentImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <button className="modal-nav modal-prev" onClick={goPrev}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button className="modal-nav modal-next" onClick={goNext}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <img src={currentImage.src} alt={currentImage.alt} className="modal-image" />

            <div className="modal-caption">
              {galleryData[selectedGalleryIndex].title} — {selectedImageIndex + 1} / {galleryData[selectedGalleryIndex].images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}