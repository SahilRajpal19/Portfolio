import { Link } from 'react-router-dom';
import HeroContainer from '../../Components/CustomComponent/HeroContainer';

export default function NotFound() {
  return (
    <div style={styles.container}>
    <video
          src="/space.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
          onLoadedData={() => console.log("Video loaded and ready to play!")}
        >
          Your browser does not support the video tag.
        </video>
      <HeroContainer>
      <h1 style={styles.title}>404 - Page Not Found</h1>
      <p style={styles.message}>Oops! You seem to have taken a wrong turn.</p>
      <Link to="/" style={styles.link}>Go Back Home</Link>
      </HeroContainer>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '100px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '48px',
    color: '#e53935',
  },
  message: {
    fontSize: '20px',
    color: '#555',
    marginBottom: '20px',
  },
  link: {
    fontSize: '18px',
    color: '#1976d2',
    textDecoration: 'none',
  },
};
