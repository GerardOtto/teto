import { useState } from 'react'
import './App.css'
import tetoImage from './assets/teto.png'
import tetoIcon from './assets/teto_icon.png'
import tetoGallery1 from './assets/teto_gallery1.png'
import tetoGallery2 from './assets/teto_gallery2.png'
import tetoGallery3 from './assets/teto_gallery3.png'

function App() {
  const [fans, setFans] = useState(3939)

  return (
    <>
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={tetoIcon} alt="Teto icon" />
          <span>Kasane Teto</span>
        </div>
        <ul className="nav-links">
          <li><a href="#intro">Inicio</a></li>
          <li><a href="#bio">Biografía</a></li>
          <li><a href="#gallery">Galería</a></li>
          <li><a href="#songs">Canciones</a></li>
          <li><a href="#fans">Fans</a></li>
        </ul>
      </nav>

      {/* Hero con imagen principal */}
      <header className="hero" id="intro">
        <div className="hero-content">
          <h1>Kasane Teto 💖🎤</h1>
          <p>La diva del UTAU que conquistó el mundo desde 2008</p>
          <a href="#bio" className="btn-primary">Conócela</a>
        </div>
        <img src={tetoImage} className="hero-img" alt="Kasane Teto" />
      </header>

      <main>
        {/* Biografía */}
        <section className="bio-section" id="bio">
          <h2>📖 Biografía</h2>
          <div className="bio-card">
            <img src={tetoIcon} alt="Kasane Teto icon" className="bio-icon" />
            <p>
              <b>Nombre:</b> Kasane Teto <br />
              <b>Cumpleaños:</b> 1 de abril 🎂 <br />
              <b>Altura:</b> 159 cm <br />
              <b>Cabello:</b> Rosa con drills 💕 <br />
              <b>Personalidad:</b> Enérgica, cómica y carismática ✨
            </p>
          </div>
        </section>

        {/* Galería */}
        <section className="gallery-section" id="gallery">
          <h2>🖼️ Galería</h2>
          <div className="gallery-grid">
            <img src={tetoGallery1} alt="Kasane Teto 1" />
            <img src={tetoGallery2} alt="Kasane Teto 2" />
            <img src={tetoGallery3} alt="Kasane Teto 3" />
          </div>
        </section>

        {/* Canciones */}
        <section className="songs-section" id="songs">
          <h2>🎶 Canciones recomendadas</h2>
          <div className="video-grid">
            <iframe src="https://www.youtube.com/embed/sqK-jh4TDXo" title="Machine Love (feat. Kasane Teto)" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/0iVlSNpq8i8" title="BIRDBRAIN (w/ OK Glass) feat. Kasane Teto" allowFullScreen></iframe>
            <iframe src="https://www.youtube.com/embed/kuNixp-wvWM" title="Fukkireta - Kasane Teto" allowFullScreen></iframe>
          </div>
        </section>

        {/* Fans */}
        <section className="fans-section" id="fans">
          <div className="fan-card">
            <h2>💞 Fans actuales</h2>
            <button onClick={() => setFans(f => f + 1)}>
              ❤️ {fans}
            </button>
            <p>¡Haz clic para unirte al fandom de Teto!</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>✨ Fanpage dedicada a Kasane Teto | Creado con React + Vite ✨</p>
        <p> Fernando felicidades por ser el homosexual #1 en el planeta Tierra! </p>
      </footer>
    </>
  )
}

export default App
