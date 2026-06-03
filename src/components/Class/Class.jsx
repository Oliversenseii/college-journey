// src/components/Class.jsx
import React, { useState, useEffect } from 'react';
import classData from './ClassData.jsx';
import './Class.css';

const Class = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % classData.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + classData.length) % classData.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalOpen) return;
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  // Swipe support (mobile)
  let touchStartX = 0;
  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!modalOpen) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const currentStudent = classData[currentIndex];

  return (
    <>
      <section className="class-section">
        <div className="class-header">
          <h1 className="class-title">BSIS 403</h1>
          <p className="class-subtitle">Coming Soon</p>
        </div>

        <div className="class-grid">
          {classData.map((student, index) => (
            <div
              key={student.id}
              className="student-card"
              onClick={() => openModal(index)}
            >
              <div className="student-photo-wrapper">
                <img
                  src={student.image}
                  alt={student.name}
                  className="student-photo"
                  loading="lazy"
                />
                <div className="photo-overlay">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-quote">"{student.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL WITH NEXT/PREV */}
      {modalOpen && currentStudent && (
        <div
          className="class-modal"
          onClick={closeModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={currentStudent.image}
              alt={currentStudent.name}
              className="modal-image"
            />

            {/* PREV BUTTON */}
            <button className="modal-nav modal-prev" onClick={goToPrev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* NEXT BUTTON */}
            <button className="modal-nav modal-next" onClick={goToNext}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* CLOSE BUTTON */}
            <button className="modal-close" onClick={closeModal}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="modal-caption">
              <p className="modal-name">{currentStudent.name}</p>
              <p className="modal-quote">"{currentStudent.quote}"</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Class;