import Footer from './Footer/Footer';
import Header from './Header/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);
