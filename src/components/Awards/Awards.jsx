// src/components/Awards.jsx
import { AWARDS_BY_YEAR } from "./AwardsData.jsx";
import "./Awards.css";

export default function Awards() {
  return (
    <>
      {/* HEADER */}
      <div className="newspaper-header">
        <h1>College Awards &amp; Recognition</h1>
        <p>Dean's Lister • CHED Scholarship • Academic Grants</p>
      </div>

      {/* AWARDS CONTAINER */}
      <div className="awards-container">
        {AWARDS_BY_YEAR.map((yearGroup, idx) => (
          <div key={idx} className="year-section">
            {/* YEAR TITLE – NOW INSIDE LOOP */}
            <h2 className="year-title">{yearGroup.year}</h2>

            <div className="awards-grid">
              {yearGroup.items.map((award) => (
                <div key={award.id} className="award-card">
                  {/* PHOTO (if exists) */}
                  {award.image && (
                    <div className="award-photo">
                      <img
                        src={award.image}
                        alt={award.title}
                        onError={(e) => {
                          e.currentTarget.src = "/awards/placeholder.jpg";
                        }}
                      />
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="award-content">
                    <h3 className="award-title">{award.title}</h3>
                    <p className="award-subtitle">{award.subtitle}</p>
                    <p className="award-desc">{award.description}</p>
                    <p className="award-date">
                      <span className="date-icon">Calendar</span> {award.date}
                    </p>
                  </div>

                  {/* GOLD RIBBON BADGE */}
                  <div className="award-badge">Gold</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}