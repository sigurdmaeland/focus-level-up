import { Link } from 'react-router-dom';
import '../styles/Global.css';

export default function Services() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Våre tjenester</h1>
          <p>
            Vi tilbyr skreddersydde digitale markedsføringsløsninger som driver 
            reell vekst for din bedrift. Alt fra strategi til implementering.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid">
            <div className="card">
              <h4>Meta Annonsering</h4>
              <p>
                Målrettet annonsering på Facebook, Instagram og Messenger. Vi skaper 
                engasjerende kampanjer som når din ideelle kunde på riktig tid.
              </p>
              <ul style={{ color: '#cccccc', marginTop: '1rem', listStyle: 'none' }}>
                <li>✓ Facebook Ads optimalisering</li>
                <li>✓ Instagram kampanjer</li>
                <li>✓ Målgruppe-research</li>
                <li>✓ A/B testing</li>
              </ul>
              <Link to="/meta-ads" className="cta-button" style={{ marginTop: '1.5rem' }}>
                Les mer
              </Link>
            </div>

            <div className="card">
              <h4>Google Annonsering</h4>
              <p>
                Effektive Google Ads kampanjer som plasserer deg øverst i søkeresultatene 
                når potensielle kunder leter etter dine tjenester.
              </p>
              <ul style={{ color: '#cccccc', marginTop: '1rem', listStyle: 'none' }}>
                <li>✓ Søkeord-research</li>
                <li>✓ Kampanje-optimalisering</li>
                <li>✓ Landing page utvikling</li>
                <li>✓ Konverteringssporing</li>
              </ul>
              <Link to="/google-ads" className="cta-button" style={{ marginTop: '1.5rem' }}>
                Les mer
              </Link>
            </div>

            <div className="card">
              <h4>Nettside & Nettbutikk</h4>
              <p>
                Moderne, responsive nettsider og e-handelsløsninger som ikke bare ser 
                bra ut, men som også konverterer besøkende til kunder.
              </p>
              <ul style={{ color: '#cccccc', marginTop: '1rem', listStyle: 'none' }}>
                <li>✓ Responsivt design</li>
                <li>✓ E-handel løsninger</li>
                <li>✓ CMS integrasjon</li>
                <li>✓ Performance optimalisering</li>
              </ul>
              <Link to="/website-shop" className="cta-button" style={{ marginTop: '1.5rem' }}>
                Les mer
              </Link>
            </div>

            <div className="card">
              <h4>Søkemotoroptimalisering (SEO)</h4>
              <p>
                Organisk synlighet i Google som bygger langsiktig trafikk og 
                autoritet for din bedrift uten løpende annonse-kostnader.
              </p>
              <ul style={{ color: '#cccccc', marginTop: '1rem', listStyle: 'none' }}>
                <li>✓ Teknisk SEO audit</li>
                <li>✓ Innholds-strategi</li>
                <li>✓ Link building</li>
                <li>✓ Local SEO</li>
              </ul>
              <Link to="/seo" className="cta-button" style={{ marginTop: '1.5rem' }}>
                Les mer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-4">
            <h2>Vår prosess</h2>
            <p style={{ color: '#cccccc', fontSize: '1.1rem' }}>
              Slik jobber vi for å levere optimale resultater
            </p>
          </div>
          <div className="grid">
            <div className="card">
              <h4>1. Analyse</h4>
              <p>
                Vi starter med en grundig analyse av din nåværende situasjon, 
                konkurrenter og markedsmuligheter.
              </p>
            </div>
            <div className="card">
              <h4>2. Strategi</h4>
              <p>
                Basert på analysen utvikler vi en skreddersydd digital strategi 
                som matcher dine forretningsmål.
              </p>
            </div>
            <div className="card">
              <h4>3. Implementering</h4>
              <p>
                Vi setter strategien ut i livet med fokus på kvalitet, 
                hastighet og målbare resultater.
              </p>
            </div>
            <div className="card">
              <h4>4. Optimalisering</h4>
              <p>
                Kontinuerlig overvåking og optimalisering sikrer at vi 
                maksimerer ROI over tid.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
