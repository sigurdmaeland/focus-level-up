import { Link } from 'react-router-dom';
import '../styles/Global.css';

export default function SEO() {
  return (
    <div className="page">
      {/* Temporary Placeholder */}
      <section className="hero">
        <div className="container">
          <h1>SEO Tjenester</h1>
          <p>
            Innholdet kommer snart...
          </p>
          <Link to="/contact" className="cta-button">
            Kontakt Oss
          </Link>
        </div>
      </section>
    </div>
  );
}
