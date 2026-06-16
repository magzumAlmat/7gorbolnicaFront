import Header from '../../components/kazniisa/Header';
import Footer from '../../components/kazniisa/Footer';

export default function KazniisaLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: '"Inter", "Roboto", sans-serif', background: '#fcfdfd' }}>
      <Header />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
