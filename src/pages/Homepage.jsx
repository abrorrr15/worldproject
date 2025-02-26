import styles from './Homepage.module.css';
import PageNav from '../components/PageNav.jsx'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuth.jsx';

function Homepage() {
  const {isRegistered} = useAuth();
  return (
    <main className={styles.homepage}>
      <PageNav />
      
      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to={isRegistered ? "/app" : "/login"} className='cta'>Start tracking now</Link>
      </section>
    </main>
  )
}

export default Homepage
