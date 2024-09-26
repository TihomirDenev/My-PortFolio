import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex-grow layout-container'>{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
