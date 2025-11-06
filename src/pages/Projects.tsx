import { Link } from "react-router-dom";
import { PROJECTS } from "../data/projects";


function toAsset(u?: string): string | undefined {
  if (!u) return undefined;
  if (/^https?:\/\//i.test(u)) return u;
  return `${import.meta.env.BASE_URL}${u.replace(/^\/+/, "")}`;
}

export default function Projects() {
  const items = PROJECTS.slice(0, 2);

  return (
    <section className="container" style={{ paddingTop: 18, paddingBottom: 18 }}>
      <div className="projects-viewport">
        {items.map((p) => {
          const bg = toAsset(p.images?.[0]);
          return (
            <article key={p.id} className="project-card">
              <div
                className="project-bg"
                style={{
                  backgroundImage: bg ? `url(${bg})` : undefined,
                  backgroundColor: bg ? undefined : "#1e293b",
                }}
                aria-hidden="true"
              />
              <div className="project-overlay">
                <div className="project-content">
                  <h2 className="project-title">{p.title}</h2>
                  <p className="project-blurb">{p.blurb}</p>

                  <div className="project-actions">
                    <Link className="btn primary" to={`/projects/${p.id}`}>
                      Open details
                    </Link>

                    {p.links?.more && (
                      <a
                        className="btn outline"
                        href={p.links.more}
                        target="_blank"
                        rel="noreferrer"
                      >
                        More
                      </a>
                    )}

                    {p.links?.repo && (
                      <a
                        className="btn outline"
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}