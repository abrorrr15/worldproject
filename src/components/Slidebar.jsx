import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Logo from './Logo';
import styles from './Slidebar.module.css';

function Slidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo/>
      <AppNav/>

      <Outlet/>
      
      <footer className={styles.footer}>
        <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} bt WorldWide inc.
        </p>
      </footer>
    </div>
  )
}

export default Slidebar
