import { useEffect, useState, useRef } from "react";
import "./Home.css";
import articles from "./HomeData.jsx";

export default function Home() {
  const [today, setToday] = useState("");
  const contentRef = useRef(null); 

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []); 

  useEffect(() => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setToday(new Date().toLocaleDateString('en-US', options));
  }, []);

  return (
    <section className="newspaper">
      <header className="header">
        <h1>The College Chronicle</h1>
        <p className="subtitle">
          <span>{today}</span> | Vol. 1, Issue 1 | College Life
        </p>
      </header>

      <div className="cols" ref={contentRef}>
        {articles.map((a, i) => (
          <article
            key={i}
            className={`article ${a.span === 2 ? 'span-2' : a.span === 3 ? 'span-3' : ''}`}
          >
            <div className="article-main">
              {a.title && <h2>{a.title}</h2>}
              {a.byline && <p className="byline">{a.byline}</p>}

              {a.images ? (
                <div className="image-collage">
                  {a.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      className={`collage-img collage-img-${idx + 1}`}
                    />
                  ))}
                </div>
              ) : (
                a.img && <img src={a.img} alt={a.title || 'Article image'} />
              )}

              <div className="content-text">{a.content}</div>

              {a.quote && <p className="pullquote">{a.quote}</p>}
            </div>

            {a.extra && (
              <div className="article-extra">
                {a.extra.tags && (
                  <div className="tags">
                    {a.extra.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
                {a.extra.readTime && <p className="read-time">{a.extra.readTime}</p>}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
