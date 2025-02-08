import NoiseEffect from '@/shared/ui/NoiseEffect';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <NoiseEffect />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
