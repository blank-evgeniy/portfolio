import Footer from './Footer/Footer';
import Header from './Header/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className='font-main'>{children}</main>
    <Footer />
  </>
);
