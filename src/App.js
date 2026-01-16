import React, { useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  useSearchParams, 
  useParams 
} from 'react-router-dom';
import Demo  from  './pages/demo';

// Composant qui gère la logique de redirection
const RedirectLogic = () => {
  const [searchParams] = useSearchParams();
  const { id: pathId } = useParams();
  
  // On récupère l'ID soit dans l'URL (/event/123) soit dans les paramètres (?id=123)
  const eventId = pathId || searchParams.get('id');

  useEffect(() => {
    if (!eventId) return;

    // 1. Schéma personnalisé pour ouvrir l'App Mobile
    const appScheme = `eventmaster-app://event/${eventId}`; // Utilise le scheme validé
    
    // 2. URLs des Stores (À REMPLACER PAR VOS VRAIS IDs)
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.jasman.MonProjet"; // Package validé
    const appStoreUrl = "https://apps.apple.com/app/idVOTRE_ID_APPLE";

    // Tentative d'ouverture immédiate
    window.location.href = appScheme;

    // Fallback après 2.5 secondes
    const timer = setTimeout(() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Si l'utilisateur est toujours sur cette page, on redirige vers le store
      if (/android/i.test(userAgent)) {
        window.location.href = playStoreUrl;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = appStoreUrl;
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [eventId]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Elite Event Master</h1>
        <div style={styles.spinner}></div>
        <p style={styles.text}>
          {eventId 
            ? "Ouverture de l'événement dans l'application..." 
            : "En attente d'un identifiant d'événement..."}
        </p>
      </div>
    </div>
  );
};
const RedirectLogic3 = () => {
  
  useEffect(() => {
    

    // 1. Schéma personnalisé pour ouvrir l'App Mobile
    const appScheme = `eventmaster-app://(admin)/home`; // Utilise le scheme validé
    
    // 2. URLs des Stores (À REMPLACER PAR VOS VRAIS IDs)
    const playStoreUrl = "https://play.google.com/store/apps/details?id=com.jasman.MonProjet"; // Package validé
    const appStoreUrl = "https://apps.apple.com/app/idVOTRE_ID_APPLE";

    // Tentative d'ouverture immédiate
    window.location.href = appScheme;

    // Fallback après 2.5 secondes
    const timer = setTimeout(() => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      // Si l'utilisateur est toujours sur cette page, on redirige vers le store
      if (/android/i.test(userAgent)) {
        window.location.href = playStoreUrl;
      } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = appStoreUrl;
      }
    }, 2500);

    return () => clearTimeout(timer);
  });

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Elite Event Master</h1>
        <div style={styles.spinner}></div>
        <p style={styles.text}>
         
             "Ouverture de l'événement dans l'application..." 
            
        </p>
      </div>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        {/* Supporte https://domaine.com/event/ID */}
        <Route path="/event/:id" element={<RedirectLogic />} />
        {/* Supporte https://domaine.com (avec ?id=ID) */}
        <Route path="/" element={<RedirectLogic />} />
        <Route path="/demo" element={<Demo/>} />
        <Route path="/login" element={<RedirectLogic3 />} />

      </Routes>
    </Router>
  );
}

const styles = {
  container: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#050505', color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' },
  card: { textAlign: 'center', padding: '40px', borderRadius: '24px', backgroundColor: '#111', border: '1px solid #222', width: '90%', maxWidth: '400px' },
  title: { fontSize: '22px', marginBottom: '20px', letterSpacing: '-0.5px' },
  spinner: { width: '40px', height: '40px', border: '4px solid #222', borderTop: '4px solid #00C2FF', borderRadius: '50%', margin: '0 auto 20px', animation: 'spin 1s linear infinite' },
  text: { color: '#888', fontSize: '14px' }
};

// Ajout de l'animation CSS pour le spinner
const styleSheet = document.createElement("style");
styleSheet.innerText = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
document.head.appendChild(styleSheet);

export default App;